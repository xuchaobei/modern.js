import path, { join } from 'path';
import fs from '@modern-js/utils/fs-extra';
import chalk from '@modern-js/utils/chalk';
import { logger } from '@modern-js/utils/logger';
import { RequestHandler } from '@modern-js/types';
import fetch from 'node-fetch';
import { isProduction, OUTPUT_DIR, TEMP_DIR } from './constants';
import { indexHash } from './runtimeModule/siteData';
import { UserConfig } from '@/shared/types';
import { addLeadingSlash, SEARCH_INDEX_NAME } from '@/shared/utils';

export function getSearchIndexFilename(indexHash: string) {
  return `${SEARCH_INDEX_NAME}.${indexHash}.json`;
}

export async function writeSearchIndex(config: UserConfig) {
  if (config.doc?.search === false) {
    return;
  }
  const cwd = process.cwd();
  const searchIndexFile = getSearchIndexFilename(indexHash);
  const outDir = config.doc?.outDir ?? join(cwd, OUTPUT_DIR);
  const source = join(TEMP_DIR, searchIndexFile);
  const target = join(outDir, 'static', searchIndexFile);
  if (await fs.pathExists(source)) {
    await fs.move(source, target, { overwrite: true });
    if (isProduction() && config.doc?.search?.mode === 'remote') {
      const { apiUrl, indexName } = config.doc.search;
      const indexData = await fs.readFile(target);
      try {
        await fetch(`${apiUrl}?index=${indexName}`, {
          method: 'PUT',
          body: indexData,
          headers: { 'Content-Type': 'application/json' },
        });

        logger.info(
          chalk.green(
            `[doc-tools] Search index uploaded to ${apiUrl}, indexName: ${indexName}`,
          ),
        );
      } catch (e) {
        logger.info(
          chalk.red(
            `[doc-tools] Upload search index \`${indexName}\` failed:\n ${e}`,
          ),
        );
      }
    }
  }
}

export function serveSearchIndexMiddleware(config: UserConfig): RequestHandler {
  return (req, res, next) => {
    const searchIndexFile = getSearchIndexFilename(indexHash);
    const searchIndexRequestPath = addLeadingSlash(
      path.join(config.doc?.base || '', searchIndexFile),
    );

    if (req.url?.includes(searchIndexRequestPath)) {
      res.setHeader('Content-Type', 'application/json');
      const searchIndex = fs.readFileSync(
        path.join(process.cwd(), OUTPUT_DIR, 'static', searchIndexFile),
        'utf-8',
      );
      res.end(searchIndex);
    } else {
      next?.();
    }
  };
}
