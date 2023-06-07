const accessTokenKey = 'YL_ACCESS_TOKEN'
export function getUserinfo() {
  return getCookie(accessTokenKey)

  // return window.localStorage.getItem(accessTokenKey)
}

export function getKey(key) {
  return getCookie(key)
}

export function setKey(key, value) {
  setCookie(key, value)

  //return window.localStorage.setItem(key,value)
}

export function setUserinfo(userinfo) {
  setCookie(accessTokenKey, userinfo)
}
function setCookie(cname, cvalue, exdays = 0) {
  if (typeof $cookies != 'undefined') {
    $cookies.set(cname, cvalue)
  }
}
function getCookie(cname) {
  //if (typeof $cookies !='undefined') {
  $cookies.get(cname)
  //}
}
// export function removeUserinfo() {
//   console.log('被执行removeUserinfo了2')

//   $cookies.remove(accessTokenKey)
//  // return window.localStorage.removeItem(accessTokenKey)
// }

