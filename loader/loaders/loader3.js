const { getOptions } = require('loader-utils');

module.exports=function(context, map, meta) {
  const options = getOptions(this);
  console.log(333, options);
  return context;
}

module.exports.pitch=function() {
  console.log('pitch 333');
}