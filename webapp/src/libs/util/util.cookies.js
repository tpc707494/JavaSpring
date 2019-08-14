import Cookies from 'js-cookie'
import WebStorageCache from 'web-storage-cache'
import log from './util.log.js'
import { version } from '../package'

const cookies = {}
const runElectron = process.env.VUE_APP_IS_ELECTRON

let wsCache
const defExp = 24 * 60 * 60
if (runElectron) {
  wsCache = new WebStorageCache({
    storage: 'localStorage',
    exp: defExp
  })
  console.log('runElectron', wsCache.isSupported())
}

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function (name = 'default', value = '', cookieSetting = {}) {
  if (runElectron) {
    const {
      expires: exp = defExp
    } = cookieSetting
    wsCache.set(`tpc-${version}-${name}`, value, {
      exp
    })
  } else {
    let currentCookieSetting = {
      expires: 1
    }
    Object.assign(currentCookieSetting, cookieSetting)
    Cookies.set(`tpc-${version}-${name}`, value, currentCookieSetting)
  }
}

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = 'default') {
  log.success(process.env.BASE_API)
  if (runElectron) {
    return wsCache.get(`tpc-${version}-${name}`)
  } else {
    return Cookies.get(`tpc-${version}-${name}`)
  }
}

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
  if (runElectron) {
    return null
  } else {
    return Cookies.get()
  }
}

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = 'default') {
  if (runElectron) {
    wsCache.delete(`tpc-${version}-${name}`)
  } else {
    return Cookies.remove(`tpc-${version}-${name}`)
  }
}

export default cookies
