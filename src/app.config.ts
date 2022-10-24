import path from 'path';
import yargs from 'yargs';

const argv = yargs.argv as Record<string, string | void>;
const ROOT_PATH = path.join(__dirname, '..');

const pkg = require(path.resolve(ROOT_PATH, 'package.json'));

export const APP_CONFIG = {
  PORT: 8888,
  NAME: 'WeblogService',
  ROOT_PATH,
};

export const PROJECT_INFO = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  homepage: pkg.homepage,
  documentation: pkg.documentation,
  repository: pkg.repository.url,
};

export const MONGODB_CONFIG = {
  url: argv.db_url || `mongodb://127.0.0.1:27017/WeblogService`,
};

export const REDIS_CONFIG = {
  host: argv.redis_host || 'localhost',
  port: argv.redis_port || 6379,
  username: argv.redis_username || null,
  password: argv.redis_password || null,
};
