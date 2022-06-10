## AJAX使用方法



# 首先 
## 实例化对象
```
   let axios = new Axios({
    BASR_URL: 一个url地址
    })
```
### GET方法
```
  axios.get('一个地址', {
      responseType: 'json'
    }, function (res) {
      console.log(res)
    })
```

### POST方法

```
 axios.post("一个地址", {
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
