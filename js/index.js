function type(type) {
  let types = Object.prototype.toString.call(type)
  return types.substring(types.indexOf(" ") + 1, types.length - 1)
}


function Axios(options) {
  if (type(options) != "Object") {
    throw Error('有问题')
  }
  this.BASR_URL = options.BASR_URL
  this.type = 'GET';
  this.responseType = 'json'
}
Axios.prototype.post = function (url, options, callback) {

  if (arguments.length == 2 && type(arguments[1] == "Function")) {
    callback = arguments[1]
  }
  let responseType = this.responseType
  let query_params = ''
  url = this.BASR_URL + url
  if (type(arguments[1]) == "Object") {
    if ('responseType' in options) responseType = options.responseType

    if ('params' in options) {
      let params = options.params
      if (type(options) == 'Object') {
        for (let i in params) {
          query_params += i + '=' + params[i] + '&'


        }
        query_params = query_params.substring(0, query_params.length - 1)

        console.log(query_params)
      }
    }

  }


  let ajax = new XMLHttpRequest()

  let _ = this
  ajax.open("POST", url)
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200 || ajax.status == 201 || ajax.status == 304) {
        if (_.responseType == 'json') {
          callback(JSON.parse(ajax.responseText))
        } else {
          callback(ajax.responseText)
        }
      }
    }
  }
  ajax.send(query_params)



}
Axios.prototype.get = function (url, options, callback) {
  if (arguments.length == 2 && type(arguments[1] == "Function")) {
    callback = arguments[1]
  }
  let responseType = this.responseType
  let query_params = "?"
  url = this.BASR_URL + url
  if (type(arguments[1]) == "Object") {
    if ('responseType' in options) responseType = options.responseType

    if ('params' in options) {
      let params = options.params
      for (let i in params) {
        query_params += i + '=' + params[i]
      }
      query_params = query_params.substring(0, query_params.length - 1)
      url += query_params
    }


  }

  let ajax = new XMLHttpRequest()
  let _ = this
  ajax.open("GET", url)
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200 || ajax.status == 201 || ajax.status == 304) {
        if (_.responseType == 'json') {
          callback(JSON.parse(ajax.responseText))
        } else {
          callback(ajax.responseText)
        }
      }
    }
  }
  ajax.send()
}