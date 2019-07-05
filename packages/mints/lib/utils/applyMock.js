const path = require('path');
const fs = require('fs');
const assert = require('assert');

const mockDir = path.join(process.cwd(), './mock');

function getConfig() {
  const files = fs.readdirSync(mockDir);

  let config = {};

  files.forEach(filename => {
    try {
      const temp = require(path.join(mockDir, filename));
      config = Object.assign({}, config, temp);
    } catch(e) {

    }
  });

  return config;
}

module.exports = (server) => {
  const config = getConfig();
  const { app } = server;

  const mockRules = [];

  Object.keys(config).forEach(key => {
    const keyParsed = parseKey(key);

    assert(!!app[keyParsed.method], `method of ${key} is not valid`);
    assert(
      typeof config[key] === 'function' ||
      typeof config[key] === 'object' ||
      typeof config[key] === 'string',
    `mock value of ${key} should be function or object or string, but got ${typeof config[key]}`);

    mockRules.push({
      path: keyParsed.path,
      method: keyParsed.method,
      target: config[key],
    });
  });

  mockRules.forEach(mock => {
    app[mock.method](
      mock.path,
      createMockHandler(mock.method, mock.path, mock.target),
    );
  });
};

function parseKey(key) {
  let method = 'get';
  let path = key;

  if (key.indexOf(' ') > -1) {
    const splited = key.split(' ');
    method = splited[0].toLowerCase();
    path = splited[1];
  }

  return { method, path };
}

function createMockHandler(method, path, value) {
  return function mockHandler(...args) {
    const res = args[1];
    if (typeof value === 'function') {
      value(...args);
    } else {
      res.json(value);
    }
  };
}
