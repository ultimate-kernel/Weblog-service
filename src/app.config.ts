import path from 'path';
import yargs from 'yargs';

const argv = yargs.argv as Record<string, string | void>;
const ROOT_PATH = path.join(__dirname, '..');

const pkg = require(path.resolve(ROOT_PATH, 'package.json'));

export const APP = {
  PORT: 8888,
  NAME: 'WeblogService',
  ROOT_PATH,
};

export const PROJECT = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  homepage: pkg.homepage,
  documentation: pkg.documentation,
  repository: pkg.repository.url,
};

export const MONGO_DB = {
  url: argv.db_url || `mongodb://127.0.0.1:27017/WeblogService`,
};

export const REDIS = {
  host: argv.redis_host || 'localhost',
  port: argv.redis_port || 6379,
  username: argv.redis_username || null,
  password: argv.redis_password || null,
};
