// 同步loader
// module.exports=function(context, map, meta) {
//   console.log(111);
//   return context;
// 同步loader
module.exports=function(context, map, meta) {
  console.log(111);

  //第一个是error信息
  this.callback(null, context, map, meta)
}

// 异步loader
// module.exports=function(context, map, meta) {
//   console.log(111);

//   //第一个是error信息
//   const callback = this.async();
//   callback(null, context, map, meta)
// }

module.exports.pitch=function() {
  console.log('pitch 111');
}