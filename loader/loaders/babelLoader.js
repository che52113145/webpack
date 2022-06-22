const { getOptions } = require('loader-utils');
const { validate } = require("schema-utils");
const babelSchema  = require("./babelSchema.json");
const babel = require("@babel/core");
const util = require("util");

const transfrom = util.promisify(babel.transform);

module.exports = function(content, map, meta) {

  const options = getOptions(this) || {};

  validate(babelSchema, options, {
    name: "babel loader"
  });

  const callback = this.async();

  transfrom(content, options)
  .then(({code, map})=>callback(null, code, map, meta))
  .catch((e) => callback(e))
}