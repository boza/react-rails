/* eslint-env browser */
import humps from 'humps'
import 'whatwg-fetch'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const endpoint = '' // Just point to the same host.

const request = (type, url, data = {}) => {
  const formattedFormData = humps.decamelizeKeys(data)
  const body = JSON.stringify(formattedFormData)

  return fetch(`${endpoint}${url}`, {
    method: type,
    headers: defaultHeaders,
    body: body,
    credentials: 'include'
  }).then(function (response) {
    if (response.ok) {
      return response.json().then(json => json)
    } else {
      return response.json().then(e => {
        throw e
      })
    }
  })
}

export default {
  delete: (url, data = {}) => {
    return request('DELETE', url, data)
  },
  post: (url, data = {}) => {
    return request('POST', url, data)
  },
  put: (url, data = {}) => {
    return request('PUT', url, data)
  },
  get: (url, data = {}) => {
    return fetch(`${endpoint}${url}`, {
      method: 'GET',
      headers: defaultHeaders
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(json => json.data)
      } else {
        return response.json().then(e => { throw e })
      }
    })
  }
}
