// 调用相机
var camera = function (callback) {
  navigator.camera.getPicture(function (imageUrl) {
    callback(null, imageUrl)
  }, function (err) {
    callback(err)
  })
}

export default {
  camera: camera
}
