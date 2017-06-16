// // 配置API接口地址
// var root = 'https://cnodejs.org/api/v1'
// // 引用superagent
// var request = require('superagent')

// // 自定义判断元素类型
// // 传入任何的参数, 返回这个参数的数据类型
// function toType (param) {
//   return ({}).toString.call(param).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }

// // 参数过滤函数
// function filterNull (o) {
//   for (var key in o) {
//     if (o[key] == null) {
//       delete o[key]
//     }
//     if (toType(o[key]) === 'string') {
//       o[key] = o[key].trim()
//       if (o[key].length === 0) {
//         delete o[key]
//       }
//     }
//   }
//   return o
// }

// // 接口处理函数:
// // 这个函数每个项目是不一样的, 我现在调整的是适用于 https://cnodejs.org/api/v1 的接口
// // 如果是其他接口需要根据接口的参数进行调整.
// // 参考文档说明:https://cnodejs.org/topic/5378720ed6e2d16149fa16bd

// function apiBase (method, url, params, success, failure) {
//   var r = request(method, url).type('text/plain')
//   if (params) {
//     params = filterNull(params)
//     if (method === 'POST' || method === 'PUT') {
//       if (toType(params) === 'object') {
//         params = JSON.stringify(params)
//       }
//       r = r.send(params)
//     } else if (method === 'GET' || method === 'DELETE') {
//       r = r.query(params)
//     }
//   }
//   r.end(function (err, res) {
//     if (err) {
//       alert('api err, HTTP CODE: ' + res.status)
//       return
//     };
//     if (res.body.success === true) {
//       if (success) {
//         success(res.body)
//       }
//     } else {
//       if (failure) {
//         failure(res.body)
//       } else {
//         alert('err: ' + JSON.stringify(res.body))
//       }
//     }
//   })
// }

// // 在返回的Vue模板中的调用接口
// export default {
//   get: function (url, success, failure) {
//     return apiBase('GET', root + '/' + url, success, failure)
//   },
//   post: function (url, success, failure) {
//     return apiBase('POST', root + '/' + url, success, failure)
//   },
//   put: function (url, success, failure) {
//     return apiBase('PUT', root + '/' + url, success, failure)
//   },
//   delete: function (url, success, failure) {
//     return apiBase('DELETE', root + '/' + url, success, failure)
//   }
// }

// 配置API 接口地址: http://api.jisuapi.com/tv
// var root = 'http://api.jisuapi.com/tv'

// 引入 axios , 用来发送请求
// var axios = require('axios')

// function apiBase (method, root, url, params, success, fail) {
//   if (method.toLocaleLowerCase() === 'get') {
//     axios.get(root + '/' + url, {
//       params: params
//     })
//     .then(function (data) {
//       success(data)
//     })
//     .catch(function (err) {
//       fail(err)
//     })
//   } else if (method.toLocaleLowerCase() === 'post') {
//     axios.post(root + '/' + url, params)
//     .then(function (data) {
//       success(data)
//     })
//     .catch(function (err) {
//       fail(err)
//     })
//   }
// }

// export default {
//   get: function (url, params, success, fail) {
//     apiBase('get', root, url, params, success, fail)
//   },
//   post: function (url, params, success, fail) {
//     apiBase('post', root, url, params, success, fail)
//   }
// }

