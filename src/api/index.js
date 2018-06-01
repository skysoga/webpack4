import Vue from 'vue'
// import VueResource from 'vue-resource'
//
// Vue.use(VueResource)
const Api = {
  databaseUrl: '/api/article/',
  oneArticle: '/api/catalog/:caId/article/:arId',
  moreArticle: '/api/catalog/:caId/article/',
  catalogUrl: '/api/catalog/list',
  loginIn: '/api/user/login'
}

export function fetchArticle (param) {
  var url = Api.databaseUrl + param
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}

export function fetchCatalog () {
  var url = Api.catalogUrl
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}
// 登录
export function loginByUsername (param) {
  var url = Api.loginIn
  console.log(param)
  var params = {'name': param.acconts, 'password': param.password}
  return Vue.http.post(url, params).then(function (res) {
    return res.body
  })
}
