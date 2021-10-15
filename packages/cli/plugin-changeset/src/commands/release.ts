import path from 'path';
import { tag as gitTag } from '@changesets/git';
import { getPackageManager, isModernjsMonorepo, fs } from '@modern-js/utils';
import { CHANGESET_PATH, execaWithStreamLog } from '../utils';

interface PublishOptions {
  tag: string;
  ignoreScripts: boolean;
}
export async function release(options: PublishOptions) {
  const appDir = process.cwd();
  const isMonorepo = isModernjsMonorepo(appDir);
  const packageManager = getPackageManager(process.cwd());

  const params = ['publish'];

  const { tag, ignoreScripts } = options;

  if (tag) {
    params.push('--tag');
    params.push(tag);
  }

  if (!isMonorepo || packageManager === 'yarn') {
    await execaWithStreamLog(CHANGESET_PATH, params);
  }

  params.push('-r');
  params.push('--report-summary');

  if (ignoreScripts) {
    params.push('--ignore-scripts');
  }

  await execaWithStreamLog(packageManager, params);

  const pnpmPublishSummaryFile = path.join(appDir, 'pnpm-publish-summary.json');
  const publishInfo: {
    publishedPackages: Array<{ name: string; version: string }>;
  } = await fs.readJSON(pnpmPublishSummaryFile, 'utf-8');

  await Promise.all(
    (publishInfo.publishedPackages || []).map(pkg =>
      gitTag(`${pkg.name}@${pkg.version}`, appDir),
    ),
  );

  await fs.remove(pnpmPublishSummaryFile);
}
