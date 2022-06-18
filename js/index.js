//ES6
class Axios{
  #type(type) {
    let types = Object.prototype.toString.call(type)
    return types.substring(types.indexOf(" ") + 1, types.length - 1)
  }
  constructor(options) {
    if (this.#type(options) != "Object") {
      throw Error('有问题')
    }
    this.BASR_URL = options.BASR_URL
    this.type = 'GET';
    this.responseType = 'json'
  }

  post(url, options, callback) {
    
    if (arguments.length == 2 && this.#type(arguments[1] == "Function")) {
      callback = arguments[1]
    }
    let responseType = this.responseType
    let query_params = ''
    url = this.BASR_URL + url
    if (this.#type(arguments[1]) == "Object") {
      if ('responseType' in options) responseType = options.responseType
  
      if ('params' in options) {
        let params = options.params
        if (this.#type(options) == 'Object') {
          for (let i in params) {
            query_params += i + '=' + params[i] + '&'
  
  
          }
          query_params = query_params.substring(0, query_params.length - 1)
  
         
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
  
  get(url, options, callback) {
    if (arguments.length == 2 && this.#type(arguments[1] == "Function")) {
      callback = arguments[1]
    }
    let responseType = this.responseType
    let query_params = "?"
    url = this.BASR_URL + url
    if (this.#type(arguments[1]) == "Object") {
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
    
    ajax.open("GET", url)
    ajax.onreadystatechange =  ()=> {
      if (ajax.readyState == 4) {
        if (ajax.status == 200 || ajax.status == 201 || ajax.status == 304) {
          if (this.responseType == 'json') {
            callback(JSON.parse(ajax.responseText))
          } else {
            callback(ajax.responseText)
          }
        }
      }
    }
    ajax.send(query_params)
  }

  ajax(obj) {
    if (!this.#type(obj)) throw Error(`obj is not defined`)
    
   
    if (Object.is(obj.type.toUpperCase(), `GET`)) {
   
      if (Reflect.has(obj, `url`)  && Reflect.has(obj, `success`)) {
     
      this.get(obj.url, obj.success)
      } else {
        throw Error('error')
    }
   
    } else if (Object.is(obj.type.toUpperCase(), `POST`)) {
     
      if (Reflect.has(obj, `url`) && Reflect.has(obj, `params`)&&  Reflect.has(obj, `callback`)) {
        this.post(obj.url, obj.options, obj.callback)
      }else {
        throw Error('error')
    }
    } else if (Object.is(obj.type.toUpperCase(), `DELETE`)) {
        console.log(obj);
      if (Reflect.has(obj, `url`) ) {
        console.log(obj);
        if (arguments.length == 2 && this.#type(arguments[1] == "Function")) {
          callback = arguments[1]
        }
        let responseType = this.responseType
        let query_params = "?"
       obj.url = this.BASR_URL + obj.url
        if (this.#type(arguments[1]) == "Object") {
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
        console.log(obj.params);
        let ajax = new XMLHttpRequest()
          console.log(obj.url);
        ajax.open("DELETE", obj.url)
        ajax.onreadystatechange = ()=> {
          if (ajax.readyState == 4) {
            if (ajax.status == 200 || ajax.status == 201 || ajax.status == 304) {
              if (this.responseType == 'json') {
                callback(JSON.parse(ajax.responseText))
             
              } else {
                callback(ajax.responseText)
              }
            }
          }
        }
        ajax.send(query_params)
      

      }else {
        throw Error('error')
    }
    } else if (Object.is(obj.type.toUpperCase(), `PUT`)) {
    
      if (Reflect.has(obj, `url`) && Reflect.has(obj, `type`) && Reflect.has(obj, `params`) && Reflect.has(obj, `success`)) {
  
       
        let responseType = this.responseType
        let query_params = ''
        obj.url = this.BASR_URL + obj.url
        // console.log(obj);
        if (this.#type(obj.params) == "Object") {
       
          if ('responseType' in obj.params) responseType = obj.params.responseType
        
          if ('params' in obj) {
            let params = obj.params
           
            if (this.#type(params) == 'Object') {
              for (let i in params) {
                query_params += i + '=' + obj.params[i] + '&'
               
    
              }
              query_params = query_params.substring(0, query_params.length - 1)
              
           
            }
          }
    
        }
    
    
        let ajax = new XMLHttpRequest()
       
        let _ = this
        ajax.open("PUT", obj.url)
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        ajax.onreadystatechange = function () {
          if (ajax.readyState == 4) {
            if (ajax.status == 200 || ajax.status == 201 || ajax.status == 304) {
              if (_.responseType == 'json') {
                obj.success(JSON.parse(ajax.responseText))

              } else {
               obj.success(ajax.responseText)
              }
            }
          }
        }
      
        ajax.send(query_params)
       
       
      } else {
      throw Error('错了')
      }
    }else {
      throw Error('error')
  }
}
    
  }












