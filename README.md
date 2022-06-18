## AJAX使用方法



# 首先 
## 实例化对象
```js
   let axios = new Axios({
    BASR_URL: 协议+一个域名地址+端口号
    })
```
### GET方法
```js
  axios.get('一个api路径', {
      responseType: 'json'
    }, function (res) {
      console.log(res)
    })
```

### POST方法

```js
 axios.post("一个api路径", {
      responseType: 'json',
      params: {
        //参数键值对
        //例如
        name:'xxx'
      }

    }, function (res) {
      console.log(res)
    })
```

### AJAX方法

#### AJAX GET方法
```js
      axios.ajax({
        type:'get',
        url:'一个api路径', 
        success(res) {
        console.log(res);
      }})
```
#### AJAX POST方法
```js
      axios.ajax({
        type:'post',
        url:'一个api路径', 
        params: {
            //参数键值对
            //例如
            name:'xxx'
          }
        },
        success(res) {
        console.log(res)
        })
```

#### AJAX DELETE方法
```js
      axios.ajax({
        type:'delete'
        url:'一个api路径', 
        success(res) {
        console.log(res);
      }})
```

#### AJAX PUT方法
```js
   axios.ajax({
      type:'put'
      url:'一个api路径', 
      params: {
        //参数键值对
        //例如
        name:'xxx'
      }
     },
      success(res) {
      console.log(res)
    })
```