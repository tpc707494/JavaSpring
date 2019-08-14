import log from './util.log.js'
import cookies from './util.cookies.js'

let util = {
  cookies,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
  log.capsule('标题：', process.env.VUE_APP_TITLE, 'success')
  const processTitle = process.env.VUE_APP_TITLE || 'tpc'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'tpc-menu-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('tpc-menu-link'))
}

export default util
