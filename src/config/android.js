// 调用相机
const camera = function (callback) {
  navigator.camera.getPicture(function (imageUrl) {
    callback(null, imageUrl)
  }, function (err) {
    callback(err)
  })
}

// 调用浏览器
const inAppBrowser = function (callback) {
  console.log(cordova)
}

export default {
  camera: camera,
  inAppBrowser: inAppBrowser
}
