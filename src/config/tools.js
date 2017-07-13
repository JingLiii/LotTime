// 定义遮挡函数
var shelter = function () {
  alert('这是一个遮挡函数')
}
var err = function (msg, err) {
  if (err) {
    alert('错误信息: ' + msg + ',' + '错误对象: ' + err)
    throw err
  }
}

export default {
  shelter: shelter,
  err: err
}
