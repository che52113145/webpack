// module.exports=function(context, map, meta) {
//   console.log(222);
//   return context;
// }

// 异步loader
module.exports=function(context, map, meta) {
  console.log(222);

  //第一个是error信息
  const callback = this.async();
  setTimeout(()=>{
    callback(null, context, map, meta)
  }, 2000)
}


module.exports.pitch=function() {
  console.log('pitch 222');
}