
<!-- - [蓝桥杯题库刷题](#蓝桥杯题库刷题)
- [Jquery](#jquery)
  - [【数据交互】天气预报查询](#数据交互天气预报查询)
  - [【数据交互】实现用户登录](#数据交互实现用户登录)
  - [【数据交互】权限管理](#数据交互权限管理)
  - [【数据交互】实现卡号绑定功能](#数据交互实现卡号绑定功能)
  - [【功能实现】折叠手风琴](#功能实现折叠手风琴)
  - [【功能实现】网页ppt](#功能实现网页ppt)
  - [【功能实现】大电影](#功能实现大电影)
- [Vue](#vue)
    - [【功能实现】购物车](#功能实现购物车)
  - [【数据交互】消失的token](#数据交互消失的token)
  - [【数据交互】知乎首页数据动态化](#数据交互知乎首页数据动态化)
  - [绝美宋词（有难度）](#绝美宋词有难度)
  - [【功能实现】时间管理大师](#功能实现时间管理大师)
  - [【功能实现】拖拽购物](#功能实现拖拽购物)
  - [【功能实现】菜单树检索](#功能实现菜单树检索)
- [ElementUI](#elementui)
  - [【功能实现】心愿便利贴](#功能实现心愿便利贴)
- [Flex](#flex)
  - [**经典骰子布局**](#经典骰子布局)
  - [水果摆盘](#水果摆盘)
  - [水果拼盘](#水果拼盘)
- [JS](#js)
  - [【代码改错】欢迎语](#代码改错欢迎语)
  - [【功能实现】卡片化标签页](#功能实现卡片化标签页)
  - [【功能实现】新年贺卡](#功能实现新年贺卡)
  - [【算法实现】斐波那契（小兔子爬楼梯）](#算法实现斐波那契小兔子爬楼梯)
  - [实现简易计算器（very easy）](#实现简易计算器very-easy)
  - [蓝桥校园一卡通](#蓝桥校园一卡通)
  - [随机数生成器](#随机数生成器)
  - [分页组件（Hard）](#分页组件hard)
  - [乾坤大挪移心法](#乾坤大挪移心法)
  - [课程列表](#课程列表)
  - [不能说的秘密](#不能说的秘密)
  - [调皮的模态框](#调皮的模态框)
- [CSS](#css)
  - [【页面布局】个人博客](#页面布局个人博客)
  - [【页面布局】给页面化个妆](#页面布局给页面化个妆)
  - [西游记之西天取经](#西游记之西天取经)
  - [【Grid】画一只考拉](#grid画一只考拉)
  - [文本溢出](#文本溢出)
- [Echarts](#echarts)
  - [商品销量和销售额实时展示看板](#商品销量和销售额实时展示看板)
- [Node.js](#nodejs)
  - [资讯接口（多练习容易忘记）](#资讯接口多练习容易忘记)
  - [封装 `Promisefy` 函数](#封装-promisefy-函数)
- [其他](#其他)
  - [【功能实现】搜一搜](#功能实现搜一搜)
  - [【数据交互】RESTful API开发](#数据交互restful-api开发)
- [2022 省赛](#2022-省赛)
  - [水果拼盘](#水果拼盘-1)
  - [展开你的扇子](#展开你的扇子)
 -->

# 蓝桥杯题库刷题

## Jquery

### 【数据交互】天气预报查询

-   通过jQuery ajax请求天气预报数据

| 接口            | API          |
| --------------- | ------------ |
| js/weather.json | 天气预报数据 |

知识点：

-   `jQuery` 使用 `ajax`

```javascript
$.ajax({
  url:"...",
  method:"GET",
  dataType:"...",
  // 成功回调
  success(data){},
  // 失败回调
  error(data){}
})
```

-   `$()` 获取多个元素后可以通过 `eq()` 来选择对应下标的元素
-   `jQuery` 插入文本的方式：
    -   `text()`
    -   `html()`

```javascript
function handle(item_str,day){
    $(`#${item_str} img`).attr("src",day.weather_icon)
    $(`#${item_str} .item-mess div`).eq(0).text(day.weather)
    $(`#${item_str} .item-mess div`).eq(1).text(day.temperature)
    $(`#${item_str} .item-mess div`).eq(2).text(day.winp)
    $(`#${item_str} .item-mess div span`).eq(0).text(day.days)
    $(`#${item_str} .item-mess div span`).eq(1).text(day.week)
}

function getweather() {
     //TODO：请补充代码
     const items = document.getElementsByClassName("item")
     $.ajax({
        url:"js/weather.json",
        method:"GET",
        dataType:"json",
        success(data){
            const res = data.result
            for(let item of items){
                for(let day of res){
                    if(item.id == "Monday" && day.week == "星期一"){
                        handle('Monday',day)
                    }
                    if(item.id == "Tuesday" && day.week == "星期二"){
                        handle('Tuesday',day)
                    }
                    if(item.id == "Wednesday" && day.week == "星期三"){
                        handle('Wednesday',day)
                    }
                    if(item.id == "Thursday" && day.week == "星期四"){
                        handle('Thursday',day)
                    }
                    if(item.id == "Friday" && day.week == "星期五"){
                        handle('Friday',day)
                    }
                    if(item.id == "Saturday" && day.week == "星期六"){
                        handle('Saturday',day)
                    }
                    if(item.id == "Sunday" && day.week == "星期日"){
                        handle('Sunday',day)
                    }
                }
            }
            $("#Monday").insertAfter($("#Sunday"))
        }
     })
}
```

### 【数据交互】实现用户登录

-   通过 `jQuerj.ajax` 申请数据，获取数据后对用户输入信息进行判断

知识点：

-   `$.ajax` 的配置格式
-   通过 `Array.prototype.filter` 返回匹配正确的用户
    -   数组长度为0，则触发失败样式
    -   数组不为0，触发成功样式

```javascript
function login(username, password) {
    //Todo:补充代码
    $.ajax({
        url:"https://labfile.oss.aliyuncs.com/courses/4450/userlist.json",
        method:"GET",
        dataType:"json",
        success(data){
            userList = data.userlist
            const user = userList.filter(user => {
                return user.username == username && user.password == password
            })
            if(!user.length){
                $("#tip2").removeClass("fade")
                $("#tip1").addClass("fade")  
                return
            }
            else{
                $("#tip1").removeClass("fade")
                $("#tip2").addClass("fade")  
            }
        }
    })
}
```

### 【数据交互】权限管理

-   通过 `ajax` 请求数据并渲染页面
-   实现左/右表的单个、多个或全部互移
-   根据用户所在的表，确定用户的身份

```javascript
$(function () {
  // 使用 ajax 获取 userList.json 数据并渲染到页面
  getData();

  // 为按钮添加事件
  $("#add").click(function () {
    // TODO：补充代码，实现功能
    // 1. 获取选中的 option
    // 2. 将选中的 option 从左侧移动到右侧
    // 3. 调用 changeAccess 函数，修改权限
    const options = $("#leftSelect option:checked")
    options.remove()
    $("#rightSelect").append(options)
    changeAccess("管理员",options)
  });
  $("#addAll").click(function () {
    // TODO：补充代码，实现功能
    const options = $("option")
    options.remove()
    changeAccess("管理员",options)
    $("#rightSelect").append(options)
  });
  $("#remove").click(function () {
    // TODO：补充代码，实现功能
    const options = $("#rightSelect option:checked")
    options.remove()
    $("#leftSelect").append(options)
    changeAccess("普通用户",options)
  });
  $("#removeAll").click(function () {
    // TODO：补充代码，实现功能
    const options = $("option")
    options.remove()
    $("#leftSelect").append(options)
    changeAccess("普通用户",options)
  });
});

/**
 * 修改权限
 * @param {Object} right 要修改的权限
 * @param {Object} changeList 要修改权限的用户列表
 */
function changeAccess(right, changeList) {
  // TODO：补充代码，实现功能
  // 1. 获取用户列表
  // 2. 遍历要修改权限的用户列表
  // 3. 遍历用户列表，找到要修改权限的用户
  // 4. 修改用户权限
  const userList = $("#userList tr")
  for(let i = 0; i < changeList.length; i++){
    const changeItemName = changeList.eq(i).val()
    for(let j = 0; j < userList.length; j++){
      const userName = userList.eq(j).children()[0].innerHTML
      if(changeItemName == userName){
        userList.eq(j).children()[1].innerHTML = right
      }
    }
  }
}

function showData(data){
  data.forEach(item => {
    temp = `<tr>
    <td>${item.name}</td>
    <td>${item.right == false ? "普通用户" : "管理员"}</td>
  </tr>`
    $("#userList").append(temp)
  })
}
// 异步获取数据
function getData() {
  // TODO：补充代码，实现功能
  let res
  $.ajax({
    url: "./js/userList.json",
    type: "get",
    dataType: "json",
    success: function (data) {
      res = new Array(data)
      showData(data)
    }
  });
}
```

### 【数据交互】实现卡号绑定功能

-   通过 `jquery ajax` 请求用户数据，与用户输入的卡号作比较
-   验证通过或不通过都通过控制 `css classs` 提示信息

知识点（没什么难点）：

-   `ajax` 请求数据，在请求成功的回调中做验证
-   验证通过： `jquery addClass` 增加 `show` ， `jquery removeClass` 移除 `fade`
-   验证不通过同理

```javascript
function bind(cardno, password) {
    //Todo:补充代码
    $.ajax({
        url:"js/cardnolist.json",
        method:"get",
        dataType:"json",
        success(data){
            const res = data.cardnolist.filter(item => {
                return item.cardno == cardno && item.password == password
            })
            if(res.length){
                // 验证成功
                $("#tip1").removeClass("fade")
                $("#tip1").addClass("show")
                $("#tip2").removeClass("show")
                $("#tip2").addClass("fade")
            }else{
                // 验证失败
                $("#tip2").removeClass("fade")
                $("#tip2").addClass("show")
                $("#tip1").removeClass("show")
                $("#tip1").addClass("fade")
            }
        }
    })
}
$(document).ready(function() {
    $("#btnsubmit").click(function() {
        //卡号
        let cardno = $("#exampleInputCardno").val();
        //密码
        let password = $("#exampleInputPassword").val();
        bind(cardno, password);
    });
});
```

### 【功能实现】折叠手风琴

-   通过 `jQuery` 给标签加 `class` 实现以下效果

知识点：

-   通过 `removeClass` 移除掉所有 `option` 的 `active` 效果
-   通过 `addClass` 单独给当前点击的元素加上 `acitve`
-   `jQuery` 中 `click` 的回调中，可以通过 `$(this)` 获取当前点击的元素

![](image/0drq8ndaw5_bnabJ5Bb2k.gif)

```javascript
$(".option").click(function(){
    $(".option").removeClass("active")
    $(this).addClass("active")
})
```

### 【功能实现】网页ppt

-   使用 `jQuery` 补充 `switchPage` ，根据 `activeIndex（页码）` 切换ppt页面，通过 `section` 的 `display` 属性实现每一页的显示与隐藏，切换页面的同时改变左下角的页码
-   目前在第一页时，“上一张”按钮应该不能点击，同理，在最后一页时，“下一张”按钮也不能点击

![](image/eh3mdqo8q3_1_ZqU1zWH7.gif)

知识点：

- `jquery` 对象可以通过 `css` 方法直接设置样式

  ```javascript
  $("section").css("display","none")
  ```

- `$()` 获取多个元素后可以通过 `eq()` 来选择对应下标的元素

```javascript
function switchPage() {
  // TODO: 请补充该函数，实现根据activeIndex切换页面的功能，并且在到达最后一页或第一页时给相应的按钮添加disable类
  $("section").css("display","none")
  $("section").eq(activeIndex).css("display","block")
  $(".page").html(`${activeIndex + 1} / 5`)
  if(activeIndex == 0){
    $(".btn.left").addClass("disable")
  }else if(activeIndex == 4){
    $(".btn.right").addClass("disable")
  }else{
    $(".btn").removeClass("disable")
  }
}
```

### 【功能实现】大电影

-   点击收藏图标，收藏图标在空心和实心中进行切换
-   点击收藏图标后，仅在收藏图标从空心切换为实心时，跳出成功提示框，2秒后自动隐藏，或点击提示框的关闭按钮该提示框隐藏

知识点：

-   `$(element).attr()` :
    -   如果只传一个参数，可以获取元素的对应属性值
    -   如果传两个参数，可以更改元素的对应属性值
-   `$(element).css()` :
    -   如果只传一个参数，可以获取元素的对应样式的值
    -   如果传两个参数，可以更改元素的对应样式

```javascript
      // TODO：待补充代码
      const svgArr = ["./images/hollow.svg","./images/solid.svg"]
      // 空心实心切换
      $(".card-body-option-favorite img").click(function(){
        $(this).attr("src",$(this).attr("src") == svgArr[0] ? svgArr[1] : svgArr[0])
        // 提示框弹窗
        if($(this).attr("src") == svgArr[1]){
          $("#toast__container").css("display","block")
          // 2s内自动消失
          setTimeout(function(){
            $("#toast__container").css("display","none")
          },2000)
        }
      })
      // 点击后消失
      $(".toast__close").click(function(){
        $("#toast__container").css("display","none")
      })
```

## Vue

### 【功能实现】购物车

-   通过 `axios` 请求数据并将数据渲染到页面上

知识点：

- `v-for`

  ```javascript
  // v-for遍历数组
  v-for="(item,index) in Array" :key="index"
  
  // v-for遍历对象
  v-for="(val,key) in Obj" :key="key"
  ```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>购物车</title>
  <script src="./js/vue.js"></script>
  <script src="./js/axios.js"></script>
  <link rel="stylesheet" href="./css/element-ui.css">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
  <div class="container" id="app">
    <h4>购物车</h4>
    <!-- 购物车列表 -->
    <div>
      <el-card class="box-card" v-for="(item,index) in this.carlist" :key="index">
        <!-- 商品图片 -->
        <img :src="item.img">
        <div>
          <span>
            <!-- 商品名称 -->
            {{item.name}}
          </span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">+</el-button>
            <el-button type="text" class="button">
              <!-- 商品数量 -->
              1
            </el-button>
            <el-button type="text" class="button">-</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
  </div>

  <!-- 引入组件库 -->
  <script src="./js/element-ui.js"></script>
  <script>
    new Vue({
      el: "#app",
      data: {
        carlist: [] //购物车列表
      },
      created() {
        // 在这里使用axios 发送请求
        axios.get("./carList.json")
        .then((res)=>{
          this.carlist = res.data
          console.log(this.carlist)
        })
      },
    })
  </script>
</body>
</html>
```

### 【数据交互】消失的token

-   根据 `vuex` 模块的命名空间修改代码

知识点：

-   `vuex` 的模块文件中可以通过 `namespaced: true` 开启命名空间
    -   命名空间可以将模块的数据、状态和操作隔离开，避免命名冲突
    -   当开启命名空间之后，该模块内部的所有状态和操作都会自动添加一个前缀，前缀就是模块的名称

```javascript
// myModule.js
const myModule = {
  // 开启命名空间
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
}
export default myModule
```

```javascript
// otherModule.js
import myModule from '@/store/modules/myModule.js'

export default {
  computed: {
    count() {
      // 访问 myModule 的 count 状态
      return this.$store.state.myModule.count
    }
  },
  methods: {
    increment() {
      // 调用 myModule 的 increment 方法
      this.$store.commit('myModule/increment')
    }
  }
}
```

```html
// 答案
<!DOCTYPE html>
<html lang="zn-CH">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./lib/vue.min.js"></script>
    <script src="./lib/vuex.min.js"></script>
    <script src="./store/BaseModule.js"></script>
    <script src="./store/UserModule.js"></script>
    <script src="./store/index.js"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="app">
        <div class="wrapper" style="width: 900px;">
            <!-- 2. 登录成功后的欢迎界面 -->
            <Panel v-if="token" :username="username">
                {{welcome}}
            </Panel>
            <!-- 1. 登录界面 -->
            <Login v-else @confirm="login">
                {{welcome}}
            </Login>
        </div>
    </div>
    <script src="./components/login.js"></script>
    <script src="./components/panel.js"></script>
    <script>
       // TODO 修改下面错误代码
        var app = new Vue({
            el: '#app',
            data() {},
            computed: {
                welcome() {
                    return store.getters.welcome
                },
                username() {
                    return store.getters["user/username"]
                },
                token() {
                    return store.getters["user/token"]
                }
            },
            methods: {
                // 回车/点击确认的回调事件
                login(username) {
                    username && store.commit('user/login', { username, token: 'sxgWKnLADfS8hUxbiMWyb' })
                    username && store.commit('say', '登录成功，欢迎你回来！')
                }
            }
        })
    </script>
</body>
</html>
```

### 【数据交互】知乎首页数据动态化

-   通过 `axios` 请求数据并绑定到 `List.vue` 组件

知识点：

-   使用 `axios` 请求数据时，要注意路径的拼接是基于index.html所在的路径开始拼接
-   可以在 `mounted` 钩子函数中，请求数据，并且将数据通过 `this.$set` 方法设置响应式对象的属性值

```vue
<template>
  <div class="list">
    <div
      class="list-item"
      v-for="item in list.data.listInfo" :key="item.id"
    >
      <img
        class='list-pic'
   :src="item.imgUrl"
      />
      <div class="list-info" >
        <p class='title'>{{item.title}}</p>
        <p class='desc'>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      list:[]
    }
  },
  mounted(){
    // 路径基于index.html开始延伸
    axios.get("static/data/list.json").then(
      val=>{
        this.$set(this,"list",val.data)
      }
    )
  }
};
</script>

<style scoped>
.list-item {
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
}
.list-pic {
  float: right;
  width: 125px;
  height: 100px;
  display: block;
  border-radius: 4px;
}
.list-info {
  width: 500px;
  float: left;
}
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.desc {
  line-height: 22px;
  font-size: 13px;
  color: #999;
}
</style>
```

### 绝美宋词（有难度）

-   完成数据请求
-   输入框输入关键词时，实时显示数据，并且高亮显示特定数据

知识点：

- `v-html`

  -   `v-html` 接收一个字符串作为 `HTML` 内容进行解析显示

  ```vue
  <template>
    <div v-html="htmlString"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        htmlString: '<h1>Hello World!</h1>',
      };
    },
  };
  </script>
  ```

- `axios`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>绝美宋词</title>
  <link rel="stylesheet" href="css/style.css" />
  <script src="./js/vue.min.js"></script>
  <script src="./js/axios.min.js"></script>
</head>

<body>
  <div id="app">
    <h1 style="text-align: center">输入关键字，找一首词</h1>
    <!-- TODO：待补充代码 -->
    <div class="search-form">
      <input type="text" id="search" class="search" placeholder="词牌名 词句 词人" @input="search"/>
      <ul class="suggestions">
        <li v-for="(item,index) in result" :key="index">
          <span class="poet" v-html="highlight(item.poetry_content)" ></span>
          <span class="title" >
            <span v-html="highlight(item.title)"></span> - <span v-html="highlight(item.author)"></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <script>
    let vm = new Vue({
      el:'#app',
      // TODO：待补充代码
      data(){
        let list = []
        let result = []
        let flag
        let str = ""
        return{list,result,flag}
      },
      mounted(){
        axios.get("./data.json").then(res=>{
          this.$set(this,"list",res.data)
        })
      },
      methods:{
        highlight(str){
          return str.replaceAll(this.str,`<span class="highlight">${this.str}</span>`)
        },
        search(e){
          if(this.str === e.target.value){
            return
          }
          const str = e.target.value
          this.str = str
          const changeStr = `<span class="highlight">${str}</span>`
          if(str === ""){
            this.$set(this,"result",[])
            return
          }
          this.result = this.list.filter(item => {
            return item.poetry_content.match(str) || item.title.match(str) || item.author.match(str)
          })
        }
      }
    })
  </script>
</body>

</html>
```

### 【功能实现】时间管理大师

-   实现一个 `todo list`
    -   `task` 可以增删，清空
    -   显示当前 `task` 总数

知识点：

-   `v-for`
-   `v-if`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>任务管理器</title>

<link type="text/css" href="css/style.css" rel="stylesheet" />

</head>
<body>         
<div id="box">
<div class="head">
  <h2>Todos</h2>
  <p>罗列日常计划，做一个时间管理大师！</p>
  <div class="input">
    <span>内容</span>
    <input type="text" placeholder="请输入你要做的事" v-model:value="val"/>
    <span id='add' @click="submit">确认</span>
  </div>
</div>

<ul class="list">
  <li v-if="todoList.length == 0">
    暂无数据
  </li>
  <li v-for="item in todoList" :key="item.id">
    <!-- 前面的序号 -->
    <span class="xh">{{item.id+1}}</span>
    <!-- 列表内容 -->
    <span>{{item.task}}</span>
    <!-- 删除按钮 -->
    <span class="qc" @click="cancel(item)"></span>
  </li>
  </li>
  <li v-if="todoList.length != 0">
    <b>
      总数：{{this.todoList.length}}
    </b>
    <b id='clear' @click="clear">清除</b>
  </li>
</ul>
</div>
<script src="js/vue.js"></script>
<script>
var top= new Vue({
  el:"#box",
  // 在此处补全代码，实现所需功能
  data(){
  let val = ''
  let todoList = []
  return{val,todoList}
  },
  methods:{
  submit(){
    if(this.val == '') return
    const todo = {
      id:this.todoList.length,
      task:this.val
    }
    this.todoList.push(todo)
  },
  cancel(e){
    const res = this.todoList.filter(item=>{
      return item.id != e.id
    })
    this.$set(this,"todoList",res)
  },
  clear(){
    this.$set(this,"todoList",[])
  }
  }
})
</script>
</body>
</html>
```

### 【功能实现】拖拽购物

-   实现拖拽购物
    -   鼠标点击商品图片后，拖拽到购物车，可以将当前选中商品加入购物车
-   将当前购物车中的商品的详细情况渲染出来，包括每件商品的数量、总价

知识点：

- `vue`

  -   `vue` 中用 `$event` 表示当前调用事件，需要在调用处传入此参数，才能在回调中调用事件本身

  ```vue
  // 这样才能在回调函数中使用event
  <div @click="divClick($event)"></div>
  divClick(e){
    console.log(e.target)
  }
  
  // 如果不传参直接调用也可以在回调中通过 e 来调用event
  <div @click="divClick"></div>
  divClick(e){
    console.log(e.target)
  }
  
  // 但是如果同时有其他参数传入，那就一定要将 $event 传入回调中
  <div @click="divClick($event,p)"></div>
  divClick(e,p){
    console.log(e.target)
    console.log(p)
  }
  ```

- 拖放事件api

拖动事件：

| 事件      | 事件处理程序 | 触发时刻                                           |
| --------- | ------------ | -------------------------------------------------- |
| drag      | ondrag       | 当拖拽元素或选中的文本时触发。                     |
| dragstart | ondragstart  | 当用户开始拖拽一个元素或选中的文本时触发           |
| dragend   | ondragend    | 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键) |

放置事件：

| 事件      | 事件处理程序 | 触发时刻                                                     |
| --------- | ------------ | ------------------------------------------------------------ |
| dragenter | ondragenter  | 当拖拽元素或选中的文本到一个可释放目标时触发                 |
| dragleave | ondragleave  | 当拖拽元素或选中的文本离开一个可释放目标时触发。             |
| dragover  | ondragover   | 当元素或选中的文本被拖到一个可释放目标上时触发（每 100 毫秒触发一次） |
| drop      | ondrop       | 当元素或选中的文本在可释放目标上被释放时触发，想要 ondrop 能正确触发，有时需要在前置 dragover 事件中禁用默认行为 |

- 取消事件的默认行为

  ```javascript
  ondragover(e){
    e.preventDefault()
  }
  ```

```vue
<!-- TODO: 补充拖拽事件，请不要改动任何 id 属性 -->
<template>
  <div class="container">
    <div class="good-list">
      <div v-for="good in goods" @dragstart="ondragstart($event,good)" :key="good.name" class="good">
        <img :src="good.cover" />
        <span>{{ good.name }}</span>
        <span>￥{{ good.price }}</span>
      </div>
    </div>
    <div id="trolley" class="trolley" @drop="ondrop($event)" @dragover="ondragover">
      <span id="bought" class="bought" v-if="bought.length !== 0">{{
        count
      }}</span>
      <img src="./images/trolley.jpeg" />
    </div>
    <div class="result">
      <div>
        购物车商品：<span id="goods">{{ goodsDetail }}</span>
      </div>
      <div>
        购物车商品总计：<span id="total">{{ totalPrice }}</span>
      </div>
    </div>
  </div>
</template>
// 样式不做展示
<script>
module.exports = {
  data() {
    return {
      goods: [
        {
          name: "畅销书",
          price: 30,
          cover: "./images/book.jpeg",
        },
        {
          name: "收纳箱",
          price: 60,
          cover: "./images/box.jpeg",
        },
        {
          name: "纸巾",
          price: 20,
          cover: "./images/paper.jpeg",
        },
        {
          name: "电视",
          price: 1000,
          cover: "./images/tv.jpg",
        },
      ],
      bought: [],
    };
  },
  // TODO: 请补充实现代码
  computed: {
    totalPrice() {
      let totalPrice = 0
      this.bought.map(item => {
        totalPrice += item.num * item.price
      })
      return totalPrice
    },
    goodsDetail() {
      let str = ""
      this.bought.map(item => {
        if(item.num){
          str += `${item.name}*${item.num} `
        }
      })
      return str;
    },
    count(){
      let count = 0
      if(this.bought.length){
        this.bought.map(item => {
          count += item.num
        })
      }
      return count
    }
  },
  methods: {
    ondragstart(e,good){
      e.dataTransfer.setData("dragGoodName",good.name)
      e.dataTransfer.setData("dragGoodCover",good.cover)
      e.dataTransfer.setData("dragGoodPrice",good.price)
    },
    ondragover(e){
      e.preventDefault()
    },
    ondrop(e){
      const dragGoodName = e.dataTransfer.getData("dragGoodName")
      const dragGoodCover = e.dataTransfer.getData("dragGoodCover")
      const dragGoodPrice = e.dataTransfer.getData("dragGoodPrice")
      let flag = 0
      this.bought.map(item => {
        if(item.name === dragGoodName){
          item.num++
          flag = 1
        }
      })
      if(!flag) this.bought.push({
        name:dragGoodName,
        cover:dragGoodCover,
        price:dragGoodPrice,
        num:1
      })
    }
  },
};
</script>
```

### 【功能实现】菜单树检索

-   通过 `axios` 异步请求数据，并将数据渲染在页面上
-   根据查找内容，做对应修改

```javascript
<!-- 需求：输入待查找的字段，输出包含该字段的所有菜单数据。
    1、若该菜单有父级菜单，则返回其父级菜单及同胞菜单。
    2、若该菜单有子级菜单，则返回该菜单及其下子级菜单。
    3、若该菜单既无父级也无子级，则返回菜单本身即可。
    测试字段：查询、首页、管理、配置、维护 -->
<div id="app">
      <input type="text" placeholder="请输入要搜索的菜单内容" @input="search" v-model="value"/>
      <ul>
        <li v-for="(item,itemIndex) in showData" :key="itemIndex">
          <span :class="changeClass(item)">{{item.meta.title}}</span>
          <ul>
            <li v-for="(option,optionIndex) in item.children" :key="optionIndex">
              <span :class="changeClass(option)">{{option.meta.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

const app = new Vue({
  el:"#app",
  // 在此处补全代码，实现二级菜单搜索功能
  data(){
    return{
      data:[],
      showData:[],
      value:"",
    }
  },
  computed:{
    spanClass(){
      if(this.value === "") return []
    }
  },
  methods:{
    changeClass(item){
      if(this.value === "") return []
      else return item.meta.title.includes(this.value) ? ['yellow'] : []
    },
    search(){
      if(this.value === "") this.showData = this.data
      const res = this.data.filter(item => {
        let isSonHad = 0
        if(item.children){
          item.children.map(item => {
            if(item.meta.title.includes(this.value)) isSonHad = 1
          })
        }
        return isSonHad || item.meta.title.includes(this.value)
      })
      this.showData = res
    }
  },
  created(){
    axios.get("./data.json").then(val=>{
      this.data = val.data
      this.showData = val.data
    })
  },
});
```

## ElementUI

### 【功能实现】心愿便利贴

-   给 `ElementUI` 表单增加验证规则

知识点：

- `ElementUI` 表单验证API:
  \| rules  | 表单验证规则 | object
  |
  \| --- | --- | --- |

  | prop     | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 model 中的字段 |
  | -------- | ------------------------------------------------------------ | ------- | ------------------------------- |
  | required | 是否必填                                                     | boolean |                                 |
  | trigger  | 验证时触发的事件                                             | string  | click/focus/change/blur/input   |
  | min      | 最小长度                                                     | number  |                                 |
  | max      | 最大长度                                                     | number  |                                 |
  | message  | 验证不通过时的错误信息                                       | string  |                                 |

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>心愿便利贴</title>
    <!-- 引入element-ui样式 --> 
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="./css/wish.css">
    <!-- 引入element-ui组件库 -->  
    <script src="./js/vue.min.js"></script> 
    <script src="./js/index.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>心愿便利贴</h1>
      <div class="container">
        <!-- TODO 待修改的代码 -->
        <div class="card" :class="item.css" v-for="(item,index) in wishList" :key="index">
          <div class="header">
            <img class="close" @click="closeCard(index)" src="./images/ding.png" alt="close">
          </div>
          <el-image
              v-if="item.pic"
              style="width: 100px; height: 100px"
              :src="item.pic" 
              :preview-src-list="picList">
            </el-image>
          <div class="content"> 
            {{item.content}}
          </div>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
      <div class="form">
        <el-form ref="form" :rules="rules" label-position="left" :model="form" label-width="80px">
          <el-form-item label="姓名" prop="name">
            <el-input id="firstName" v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="许愿内容" prop="content">
            <el-input type="textarea" id="content" placeholder="请输入内容" v-model="form.content" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="图片上传">
          <el-upload
            ref="uploadRef"
            action="#"
            :limit="1"
            list-type="picture-card" 
            :on-remove="handleRemove"
            :on-change="getPic"
            :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" 
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>  
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)">
              <i class="el-icon-delete"></i>
              </span>
                </span> 
              </div>
          </el-upload> 
          </el-form-item>
          <el-form-item>
              <el-button id="onSubmit" type="primary" @click="onSubmit">发布</el-button>
              <el-button @click="onRest">重置</el-button>
          </el-form-item>
        </el-form>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="form.pic" alt="">
        </el-dialog>
      </div>
    </div> 
  </body>
  <script>
    const app = new Vue({
      el: "#app",
      data: { 
        wishList: [], 
        form: {
          name:'',
          content: '',
          pic: ''
        },
        rules: {
          // TODO 待补充验证的代码
          name:[
            {
              required:true,
              min:2,
              max:4
            }
          ],
          content:[
            {
              required:true,
              min:1,
              max:30
            }
          ]
        },
        num:1,
        picList: [],
        textarea: '', 
        dialogVisible: false,
        disabled: false
      },
      methods: { 
        // 提交方法
        onSubmit() { 
          this.$refs['form'].validate((valid) => {
          if (valid) {
            let obj = this.form;
            obj.css = 'item' + this.num;
            this.num++;
            if(this.num > 4) {
            this.num = 1;
            }
            this.wishList.push(obj)
            this.form = {};
            this.$refs.uploadRef.uploadFiles.pop()  
            console.log(this.wishList);
          } else { 
            this.$message({
            message: '提交错误！请检查输入内容',
            type: 'warning'
            });
            return false;
          }
          }); 
        },
        // 关闭许愿卡
        closeCard(index) { 
          this.wishList.splice(index,1)
        },
        // 重置表单
        onRest() { 
          this.$refs['form'].resetFields();
        },
        // 图片删除
        handleRemove(file) { 
          let index = this.$refs.uploadRef.uploadFiles.findIndex(e => e.uid === file.uid);
          this.$refs.uploadRef.uploadFiles.splice(index,1); 
        },
        // 模拟上传图片
        getPic(e) { 
          this.form.pic = e.url;
          this.picList.push(e.url)
        }, 
        // 预览图片
        handlePictureCardPreview(file, fileList) {
        this.form.pic = file.url;
        this.dialogVisible = true;
        }
      }
    });
  </script>
</html>
```

## Flex

### **经典骰子布局**

-   通过 `flex` 完成骰子1\~9的布局

知识点：

-   `flex`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>骰子布局</title>
    <style>
        body {
            margin: 10px 0 0 0;
            display: flex;
            justify-content: space-around;
        }
        body>div {
            display: flex;
            width: 100px;
            height: 100px;
            border-radius: 4px;
            border: 2px solid red;
            box-sizing: border-box;
        }
        p {
            width: 15px;
            height: 15px;
            background-color: black;
            border-radius: 50%;
            margin: 2px;
        }
        .div1 {
            justify-content: center;
            align-items: center;
        }
        /*todo:请补全剩余骰子布局代码*/
        .div2{
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        .div3{
            justify-content: space-around;
        }
        .div3 p:nth-child(2){
            align-self: center
        }
        .div3 p:nth-child(3){
            align-self: flex-end;
        }
        .div4{
            justify-content: space-around;
        }
        .div4 div{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .div5,.div6,.div7,.div8,.div9{
            flex-direction: column;
            justify-content: space-around;
        }
        .div5 div,.div6 div,.div7 div,.div9 div{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .div8 div{
            display: flex;
            flex-direction: row;
            justify-content: space-between
        }
    </style>
</head>

<body>
    <!--骰子1-->
    <div class="div1">
        <p></p>
    </div>
    <!--骰子2-->
    <div class="div2">
        <p></p>
        <p></p>
    </div>
    <!--骰子3-->
    <div class="div3">
        <p></p>
        <p></p>
        <p></p>
    </div>
    <!--骰子4-->
    <div class="div4">
        <div>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
    </div>
    <!--骰子5-->
    <div class="div5">
        <div>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
    </div>
    <!--骰子6-->
    <div class="div6">
        <div>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
    </div>
    <!--骰子7-->
    <div class="div7">
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
    <!--骰子8-->
    <div class="div8">
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
    <!--骰子9-->
    <div class="div9">
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
</body>

</html>
```

### 水果摆盘

-   按以下页面调整页面布局

![](image/5lt39iltxf_qA3NQRdxVl.png)

![](image/zp1tk_8qoe_cqg2tcpgx9.png)

知识点：

-   `flex order`
    -   `order` 接受一个整数作为参数，表示该元素在 `flex` 容器中的布局顺序，默认情况下，所有子元素的 `order` 值为0， **`order`**\*\* 值越小，元素的排序越靠前\*\*​

```css
/* 菠萝 TODO 待补充代码 */
.yellow {
  align-self: flex-end;
  order: 1;
}
```

### 水果拼盘

-   按以下页面调整布局

![](image/o2rk3xdrar_H81reoe2ka.png)

![](image/b9utmheoma_g9ca8C5voF.png)

知识点：

-   `flex-wrap`

```css
#pond {
  flex-direction: column;
  flex-wrap: wrap;
}
```

## JS

### 【代码改错】欢迎语

知识点：

- 模板字面量

  ```javascript
  // 例子
  const name = 'Alice';
  const age = 18;
  // 通过 ${} 插入变量或表达式
  console.log(`名字是 ${name}，年龄是 ${age}`);
  // 输出：名字是 Alice，年龄是 18
  ```

```javascript
function generate() {
    subject = document.getElementById("subject");
    event1 = document.getElementById("event1");
    event2 = document.getElementById("event2");
    if (subject.value.length==0 || event1.value.length==0 || event2.value.length==0){
        return;
    }else{
        result = `欢迎用户${subject.value}在${event2.value}学习${event1.value}课程！`;
        document.getElementById("result").value = result;
    }
    
}
```

### 【功能实现】卡片化标签页

-   实现如下gif的功能

![](image/gghn9ya7vu_lM5Oi6RfU4.gif)

知识点：

-   通过 `setAttribute` 为 `HTML` 元素设置 `Class` 属性值
-   通过 `getAttribute` 获取 `HTML` 元素的 `Class` 属性值

```javascript
// 实现选项卡功能
function init() {
  // TODO 待补充代码
  const optionOne = document.getElementsByClassName("red")[0]
  const optionTwo = document.getElementsByClassName("green")[0]
  const optionThree = document.getElementsByClassName("blue")[0]
  const optionFour = document.getElementsByClassName("yellow")[0]
  const contentOne = document.getElementById("one")
  const contentTwo = document.getElementById("two")
  const contentThree = document.getElementById("three")
  const contentFour = document.getElementById("four")
  const contents = [contentOne,contentTwo,contentThree,contentFour]
  const options = [optionOne,optionTwo,optionThree,optionFour]
  let flag = [0,0,0,0]
  options.forEach((option,index) =>{
    const optionClass = option.getAttribute("class")
    if(optionClass.includes("active")){
      flag[index] = 1
    }
  })
  options.forEach((option,index) =>{
    option.addEventListener("click",function(){
      const optionClass = option.getAttribute("class")
      flag.forEach((item,index) =>{
        if(item == 1){
          const removeOptionClass = options[index].getAttribute("class")
          const OptionClassVal = removeOptionClass.replace("active","")
          options[index].setAttribute("class",OptionClassVal)
          contents[index].setAttribute("class","")
          flag[index] = 0
        }
      })
      option.setAttribute("class",`${optionClass} active`)
      contents[index].setAttribute("class","active")
      flag[index] = 1
    })
  })
}
init();
```

### 【功能实现】新年贺卡

-   在固定的 `greetings` 中随机取一个贺词
-   将贺词显示在对应的元素中

知识点：无，比较简单，

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const greetingDisplay = document.getElementById("greeting-display")
  const btn = document.getElementById("btn")
  // 点击开始书写按钮
  btn.addEventListener("click", () => {
    show(greetingDisplay)
  })
})

const greetings = [
  "新年快乐!",
  "接受我新春的祝愿,祝你平安幸福",
  "祝你新年快乐,洋洋得意!",
  "新的一年,新的开始;心的祝福,新的起点!",
  "新年好!祝新年心情好,身体好,一切顺心!",
]

// 随机数函数 从 greetings 随机取一个值并返回
function writeGreeting() {
  // TODO 带补充代码  
  const index = Math.floor(Math.random() * 4)
  console.log(index)
  return greetings[index]
}

/*
 * @param {*} greetingDisplay  要显示内容的dom元素
 */
//  show 将 writeGreeting 函数中返回的内容显示在 greetingDisplay 元素中
function show(greetingDisplay) {
  // TODO 待补充代码
  greetingDisplay.innerHTML = writeGreeting()
}

module.exports = { show, writeGreeting }
```

### 【算法实现】斐波那契（小兔子爬楼梯）

知识点：（比较简单）

-   小于等于2，直接返回n
-   大于2，递归n-1与n-2

```javascript
const climbStairs = (n) => {
    return n <= 2 ? n : climbStairs(n-1) + climbStairs(n-2)
}
```

### 实现简易计算器（very easy）

-   实现一个简易计算器

```javascript
function cal(num1, num2, type) {
    if(num1 == NaN || num2 == NaN) return
    else{
        switch(type){
            case 0:{
                return num1 + num2
            }
            case 1:{
                return num1 - num2
            }
            case 2:{
                return num1 * num2
            }
            case 3:{
                return num1 / num2
            }
        }
    }
}
```

### 蓝桥校园一卡通

-   对用户输入做正则式判断，错误时，做对应的显示
-   用户输入完全正确，显示对应效果

知识点：

- 正则表达式

  -   正则中用 `[\u4e00-\u9fa5]`表示汉字

  ```javascript
  // 匹配2-4个汉字
  const str = "您你你你"
  const reg = /^[\u4e00-\u9fa5]{2,4}$/g
  
  console.log(reg.test(str)) // True
  
  // 匹配1-12位数字
  const numReg = /^\d{1,12}$/g
  
  console.log(numReg.test(str)) // False
  ```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>蓝桥校园一卡通</title> 
  <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/index.css" /> 
  </head> 
  <body>
    <div id="app"> 
    <div class="form">
      <div class="card" id="cardStyle">
        <div class="cardName">蓝桥校园一卡通</div>
        <div class="info"> 
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="content">
        <div class="form-group">
            <label for="studentName">姓名</label>
            <input type="text" class="form-control" id="studentName" placeholder="请输入姓名" aria-describedby="inputSuccess2Status">
          <span id="vail_name" style="display: none;" class="help-block"> 姓名是2-4个汉字，请您检查输入的内容</span>
        </div>
        <div class="form-group">
            <label for="studentId">学号</label>
            <input type="number" class="form-control" id="studentId" placeholder="请输入学号">
          <span id="vail_studentId" style="display: none;" class="help-block"> 学号是1-12位的数字，请您检查输入的内容</span>
        </div>
        <div class="form-group">
            <label for="college">学院</label>
            <select id="college" class="form-control">
              <option value="软件工程学院">软件工程学院</option>
              <option value="信息技术学院">信息技术学院</option>
              <option value="数字媒体学院">数字媒体学院</option>
              <option value="计算机科学学院">计算机科学学院</option> 
            </select>
        </div> 
        <button id="submit">制卡</button> 
      </div>
    </div>
    </div> 
    <script> 
      // 获取DOM元素对象
    const studentName = document.getElementById("studentName"); // 姓名
    const studentId = document.getElementById("studentId");  // 学号
    const college = document.getElementById("college"); // 学院
    const submit = document.getElementById("submit");  // 制卡按钮
    const cardStyle = document.getElementById("cardStyle"); // 卡片
    const item = document.querySelectorAll(".item") // 卡片项
    
    submit.onclick = () => {
      // TODO 待补充代码
      const nameReg = /^[\u4e00-\u9fa5]{2,4}$/g
      const idReg = /^\d{1,12}$/g
      const formGroup = document.getElementsByClassName("form-group")
      const vailName = document.getElementById("vail_name")
      const vailStudentId = document.getElementById("vail_studentId")
      const items = document.getElementsByClassName("item")
      let flag = true
      if(!nameReg.test(studentName.value)){
        vailName.style.display = "block"
        vailName.innerHTML = "姓名是2-4个汉字，请您检查输入的内容"
        formGroup[0].setAttribute("class",`${formGroup[0].getAttribute("class")} has-error`)
        flag = false
      }
      if(!idReg.test(studentId.value)){
        vailStudentId.style.display = "block"
        vailStudentId.innerHTML = "学号是1-12位的数字，请您检查输入的内容"
        formGroup[1].setAttribute("class",`${formGroup[1].getAttribute("class")} has-error`)
        flag = false
      }
      if(flag){
        items[0].innerHTML = `姓名：${studentName.value}`
        items[1].innerHTML = `学号：${studentId.value}`
        items[2].innerHTML = `学院：${college.value}`
        // 添加 showCard 类显示放大一卡通的动画，请勿删除
        cardStyle.classList.add('showCard') 
      }
    }
      
    </script>
  </body>
</html>
```

### 随机数生成器

-   生成 `min` \~ `max` 范围的 `countNum` 个不重复的随机数，最终这些随机数以一个数组的形式返回。

```javascript
/**
 * 封装函数，函数名 getRandomNum(min,max,countNum)
 * 生成 min~max 范围的 countNum 个不重复的随机数，存入数组并返回
 */
//生成指定数目和范围的随机数
const getRandomNum = function(min,max,countNum){
    var arr = [];
    // 在此处补全代码
    for(let i = 0; i < countNum; i++){
        randomNum =Math.floor(Math.random() * max) + 1
        if(arr.includes(randomNum)){
            i--
            continue
        }
        arr.push(randomNum)
    } 
    return arr;
}
```

### 分页组件（Hard）

-   通过 `ajax` 或 `axios` 完成数据请求，并完成当前页的数据渲染
-   补充翻页事件的回调函数，更新对应页面
-   生成页码显示
    -   其中 `createPaginationIndexArr` 函数的参数列表说明如下：
        \| 参数名         | 描述      |
        \| ----------- | ------- |
        \| currentPage | 当前页数    |
        \| totalPages  | 总的页码数   |
        \| pagerCount  | 最多页码按钮数 |
        生成分页数组的规则如下所示：
    -   特殊情况：`totalPages<=pagerCount`
        \| 测试数据 1      | totalPages：5 pagerCount：5 | 测试数据 2      | totalPages：3 pagerCount：5 |
        \| ----------- | ------------------------- | ----------- | ------------------------- |
        \| currentPage | indexArr                  | currentPage | indexArr                  |
        \| 1,2,3,4,5   | \[1,2,3,4,5]              | 1,2,3       | \[1,2,3]                  |
    -   正常情况：`totalPages>pagerCount`
        \| 测试数据 1      | totalPages：14 pagerCount：5 | 测试数据 2      | totalPages：10 pagerCount：5 | 测试数据 3      | totalPages：10 pagerCount：6 |
        \| ----------- | -------------------------- | ----------- | -------------------------- | ----------- | -------------------------- |
        \| currentPage | indexArr                   | currentPage | indexArr                   | currentPage | indexArr                   |
        \| 1,2,3       | \[1,2,3,4,14]              | 1,2,3       | \[1,2,3,4,10]              | 1,2,3,4     | \[1,2,3,4,5,10]            |
        \| 4           | \[1,3,4,5,14]              | 4           | \[1,3,4,5,10]              | 5           | \[1,3,4,5,6,10]            |
        \| 5           | \[1,4,5,6,14]              | 5           | \[1,4,5,6,10]              | 6           | \[1,4,5,6,7,10]            |
        \| 6           | \[1,5,6,7,14]              | 6           | \[1,5,6,7,10]              | 7,8,9,10    | \[1,6,7,8,9,10]            |
        \| 7           | \[1,6,7,8,14]              | 7           | \[1,6,7,8,10]              |             |                            |
        \| 8           | \[1,7,8,9,14]              | 8,9,10      | \[1,7,8,9,10]              |             |                            |
        \| 9           | \[1,8,9,10,14]             |             |                            |             |                            |
        \| 10          | \[1,9,10,11,14]            |             |                            |             |                            |
        \| 11          | \[1,10,11,12,14]           |             |                            |             |                            |
        \| 12,13,14    | \[1,11,12,13,14]           |             |                            |             |                            |
-   根据 `indexArr` 数组生成页码显示的字符串模板 `template` ，蓝桥杯

![](image/nkwmt1zhq1_gu9g2dXFWe.gif)

```javascript
/**util.js
 * @description 得到分页数组 indexArr，如[1,2,3,4,10],[1,3,4,5,10],[1,7,8,9,10]
 * @param {number} currentPage 当前页数,默认为第一页  
 * @param {number} totalPages 总的页码数
 * @param {number} pagerCount 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
 * @return {Array} 分页数组 indexArr
*/
const createPaginationIndexArr = (currentPage, totalPages, pagerCount) => {
    let indexArr = [];
    // TODO：根据传参生成分页数组 indexArr
    if(currentPage > totalPages) return

    // 特殊情况 totalPages <= pagerCount
    if(totalPages <= pagerCount){
        for(let i = 0; i < totalPages; i++){
            indexArr[i] = i+1
        }
        console.log(indexArr)
        return indexArr
    }

    // 第一个页码必定是1，最后一个页面必定是totalPages，直接写死
    for(let i = 0; i < pagerCount; i++){
        indexArr[i] = 1
    }
    indexArr[pagerCount-1] = totalPages

    if(currentPage >= totalPages - (pagerCount - 3) && currentPage <= totalPages){
        // currentPage 处于末尾
        for(let i = 1; i < pagerCount-1; i++){
            indexArr[i] = totalPages - (pagerCount - 2) + i - 1
        }
    }else if(currentPage >= 1 && currentPage <= 1 + (pagerCount - 3)){
        // currentPage 处于开头
        for(let i = 1; i < pagerCount-1; i++){
            indexArr[i] = i+1
        }
    }else{
        // currentPage 处于中间
        for(let i = 1;i < pagerCount-1; i++){
            indexArr[i] = currentPage - (pagerCount - 4) + i - 1
        }
    }
    console.log(indexArr)
    return indexArr;
}

module.exports = {
    createPaginationIndexArr
}
```

```javascript
/**index.js
 * @description ajax 请求，通过传递的 currentPage, pageSize 获取到当前页和总页数的数据
 * @param {string} url 请求地址，必填
 * @param {string} method 请求方式，可选参数，默认为 get
 * @param {string} data 请求体数据，可选参数
 * @param {number} currentPage 当前页数，必填
 * @param {number} pageSize 每页显示条目个数，必填
 * @return {object} {data,total} data为data.json中data数组的部分数据，total为data.json中total的值
 * */
async function ajax({ url, method = "get", data, query: { currentPage, pageSize } }) {
    // TODO:根据函数参数 `query` 对象  `currentPage, pageSize` 获得当前页的数据
    let result = {
        data:[],
        total:0
    }
    await axios.get(url).then(val => {
        if(val.data.total % pageSize){
            result.total = parseInt(val.data.total / pageSize) + 1
        }else result.total = val.data.total / pageSize
        const indexStart = (currentPage - 1) * 10
        for(let i = indexStart; i < indexStart + pageSize; i++){
            result.data[i] = val.data.data[i]
        }
    })
    return result;
}

class Pagination {
    /**
     * @param {Element} root
     * @param {number} pageSize 每页显示条目个数
     * @param {number} total 总条目数
     * @param {number} pagerCount 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
     * @param {number} currentPage 当前页数,默认为第一页  
     * @param {function} currentChange current-page 改变时触发
    */
    constructor(root, { pageSize, total, pagerCount, currentPage }, { currentChange }) {
        if (pagerCount % 2 == 0) {
            pagerCount--;
        }
        this.root = root;
        this.pageSize = pageSize || 10;
        this.total = total;
        this.pagerCount = pagerCount || 7;
        this.currentPage = currentPage || 1;
        this.currentChange = currentChange;
        this.totalPages = Math.ceil(total / pageSize);
        this.initPagination();
    }
    /**
     * @description 初始化分页组件，首次创建和 this.currentPage 改变时调用
     * */
    initPagination() {
        const indexArr = createPaginationIndexArr(this.currentPage, this.totalPages, this.pagerCount);
        document.querySelector("#index-arr").innerText = JSON.stringify(indexArr);
        this.renderPagination(indexArr);
        this.initEvents();
        this.currentChange(this.currentPage);
    }

    /**
     * @description 根据序号数组生成分页组件的字符串模板通过 innerHTML 挂载在 root 元素内
     * @param {Array} indexArr 分页数组 indexArr
     * @return {String} 分页组件的字符串模板
    */
    renderPagination(indexArr) {
        let template = ``;
        // TODO：根据 indexArr 数组生成分页组件的字符串模板 template
        console.log(indexArr)
        console.log("render",this.currentPage)
        if(this.totalPages <= this.pagerCount){
            for(let i = 0; i < indexArr.length; i++){
                if(indexArr[i] === this.currentPage){
                    template += `<li class="number active">${indexArr[i]}</li>`
                }else{
                    template += `<li class="number">${indexArr[i]}</li>`
                }
            }
        }else{
            for(let i = 0; i < this.pagerCount; i++){
                if(indexArr[i] === this.currentPage){
                    template += `<li class="number active">${indexArr[i]}</li>`
                    // 最后一页
                    if(i === this.pagerCount - 1) continue
                    // 说明前后两个数据不连续
                    if(indexArr[i+1] != indexArr[i]+1){
                        template += `<li class="number more">...</li>`
                    }
                    continue
                }else{
                    template += `<li class="number">${indexArr[i]}</li>`
                    // 最后一页
                    if(i === this.pagerCount - 1) continue
                    // 说明前后两个数据不连续
                    if(indexArr[i+1] != indexArr[i]+1){
                        template += `<li class="number more">...</li>`
                    }
                    continue
                }
            }
        }
        this.root.innerHTML = `
        <div class="pagination">
            <div class="btn btn-left" id="btn-prev">&lt;</div>
            <ul class="pager">${template} </ul>
            <div class="btn btn-right" id="btn-next">&gt;</div>
        </div>`;
    }
    /** 
     * @description 事件绑定，改变 this.currentPage 的值,值在 1 到 this.totalPages 之间
     **/
    initEvents() {
        this.root.querySelector("#btn-prev").addEventListener('click', () => {
            // TODO:"<" 按钮的点击事件， 点击时 this.currentPage - 1
            if(this.currentPage <= 1) return
            else this.currentPage--
            this.initPagination();
        })
        this.root.querySelector("#btn-next").addEventListener('click', () => {
            // TODO:">" 按钮的点击事件， 点击时 this.currentPage + 1
            if(this.currentPage >= this.totalPages) return
            else this.currentPage++
            this.initPagination();
        })
        this.root.querySelector(".pager").addEventListener('click', (e) => {
            if (e.target.nodeName.toLowerCase() === 'li') {
                if (this.currentPage === e.target.innerText) return;
                if (e.target.classList.contains('more')) return;
                this.currentPage = Number(e.target.innerText)
            }
            this.initPagination();
        });
    }
}

const paginationConfigObj = { pageSize: 10, total: 100, pagerCount: 5};
const root = document.querySelector(".pagination-container");
async function renderContent(currentPage) {
    document.querySelector("#current-page").innerText = currentPage;
    const { data, total } = await ajax({ url: "./js/data.json", method: "get", query: { currentPage, ...paginationConfigObj } });
    document.querySelector("#ajax-data").innerText = JSON.stringify(data);
    document.querySelector("#ajax-total").innerText = JSON.stringify(total);
    const contentEle = document.querySelector('.content');
    let template = data.reduce((prev, cur) =>
        prev + `                
        <li class="item" data-index="${cur.id}">
            <h4 class="title">${cur.title}</h4>
            <div class="item-right">
                评论数：<span class="replay-count">${cur.replayCount}</span>
                /
                点击数：<span class="click-count">${cur.clickCount}</span>
            </div>
        </li>`
        , "");
    contentEle.innerHTML = template;
}

new Pagination(root, paginationConfigObj, { currentChange: renderContent });
```

### 乾坤大挪移心法

-   实现将传入的参数和后续接收的参数保存起来，并最终将它们以特定的字符串形式返回出来

知识点：

-   闭包
    -   记录参数的同时，方便的进行链式调用

```javascript
function mentalMethod(...args) {
    // TODO 待补充代码  
    let arr = []
    arr.push(...args)
    return function add(...args){
        if(args.length){
            arr.push(...args)
            return add
        }else{
            return "战胜" + arr.join(",") 
        }
    }
}
```

### 课程列表

-   通过 `axios` 完成数据交互，并渲染数据
-   完成换页功能，并显示当前页码和总页码

```javascript
let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数
let url = "./js/carlist.json"

// TODO：待补充代码
function showData(url,pageNum){
  axios.get(url).then(val => {
    const list = document.getElementById("list")
    const pagination = document.getElementById("pagination")
    maxPage = val.data.length % 5 === 0 ? val.data.length / 5 : parseInt(val.data.length / 5) + 1
    pagination.innerHTML =  `共${maxPage}页，当前${pageNum}页`
    for(let i = (pageNum - 1) * 5; i < pageNum * 5; i++){
      const template = `<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${val.data[i].name}</h5>
            <small>${val.data[i].price}元</small>
          </div>
          <p class="mb-1">${val.data[i].description}</p>
        </a>
      </div>`
      list.innerHTML += template
    }
  })
}
showData("./js/carlist.json",pageNum)

// 点击上一页
let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.onclick = function () {
  // TODO：待补充代码
  if(pageNum === 1) return
  else{
    pageNum--
    document.getElementById("list").innerHTML = ""
    showData(url,pageNum)
  }
  if(pageNum != 1 && pageNum != maxPage){
    prev.setAttribute("class","page-item")
    next.setAttribute("class","page-item")
  }else{
    prev.setAttribute("class","page-item disabled")
  }
};
// 点击下一页

next.onclick = function () {
  // TODO：待补充代码
  if(pageNum === maxPage) return
  else{
    pageNum++
    document.getElementById("list").innerHTML = ""
    showData(url,pageNum)
  }
  if(pageNum != 1 && pageNum != maxPage){
    prev.setAttribute("class","page-item")
    next.setAttribute("class","page-item")
  }else{
    next.setAttribute("class","page-item disabled")
  }
};
```

### 不能说的秘密

-   根据需求随机生成密码
    -   是否包含大写字母
    -   是否包含小写字母
    -   是否包含数字
    -   是否包含特殊符号

```javascript
function generatePassword(lower, upper, number, symbol, length) {
  //TODO：待补充代码
  let res = ''
  while (true) { 
    // 依次从多个随机池里面抽一个字符添加到 res 中
    if (lower) res+= rand('qwertyuiopasdfghjklzxcvbnm')
    if (res.length == length) break;
    if (upper) res+= rand('QWERTYUIOPASDFGHJKLZXCVBNM')
    if (res.length == length) break;
    if (number) res+=rand('1234567890')
    if (res.length == length) break;
    if (symbol) res+= rand('!@#$%^&*(){}[]=<>/,.')
    if (res.length == length) break;
  }
// 最后在return的时候再做一个乱序处理
// sort(() => Math.random() - 0.5) 方法：
// 对字符数组进行排序，排序规则是通过 Math.random() - 0.5 函数返回的值来决定，
// 当函数返回值小于 0 时，表示 x 在 y 之前，反之则表示 x 在 y 之后。
// 由于 Math.random() 返回值在 0 到 1 之间，
// 因此 Math.random() - 0.5 函数返回的值有约 50% 的概率为正或负，从而实现了随机排序的效果。
return res.split('').sort(() => Math.random() - 0.5).join('')
 
function rand(str) { 
    return str.split('')[Math.random()*str.length|0]
}
```

### 调皮的模态框

-   阻止冒泡

知识点：

-   `event.stopPropagation`

```javascript
        function handleClick(e){
            e.preventDefault()
            $("#myModal").css("display","block")
        }
        function handleOk(e){
            e.stopPropagation()
            $("#myModal").css("display","none")
        }
```

## CSS

### 【页面布局】个人博客

-   根据图片修改样式

知识点：

- 水平垂直居中

  -   `flex`

  ```css
  .container{
    // 固定宽高
    display:flex,
    justify-content:center,
    align-items:center
  }
  .inContainer{
    // 固定宽高
  }
  ```

  -   `transform`

  ```css
  .container{
    position:absolute,
    top:50%,
    left:50%,
    transform:translate(-50%,-50%)
  }
  ```

  -   `table`

  ```css
  .parent {
    display: table;
  }
  
  .child {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  ```

- 两栏布局（左边自适应，右边固定宽度）

  -   通过 `flex` 实现，左栏设置 `align-self:auto` ，右栏固定宽度

```css
/* TODO:banner 上的文字 需要居中显示 */
.home-wrapper .banner .banner-conent .hero {
  margin-top: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-100%);
}

/* TODO: main-wrapper 通过设置main-wrapper 布局方式 让.main-left  .main-right 正确显示 */
.main-wrapper {
  margin: 1.5rem auto 0 auto;
  max-width: 1100px;
  padding: 0 0.9rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
}

/*/* TODO 宽度自适应 居左显示 */
.main-wrapper .main-left {
  align-self: auto;
}
```

### 【页面布局】给页面化个妆

-   根据需求设置样式

![](image/4nc81swya3_QWPEzSDKxY.png)

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    background-image: url('../images/background-pic.jpeg');
    background-size: cover;
    color: #fff;
    height: 945;
    width: 1920;
}
.nav-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.nav-bar img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 15px;
}
.content-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.content{
    width: 450px;
    height: 600px;
    background-color: rgba(0, 0, 0, .45);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.content img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transform: translateY(-35%);
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.form h2{
    font-size: 45px;
    font-weight: 800;
    display: block;
    transform: translateY(-130%);
}
.form form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* position: relative;
    top: -40%; */
}
.form form input{
    font-size: 20px;
    border-radius: 5px;
    width: 300px;
    padding: 10px 0;
    place-items: center;
    margin-bottom: 10px;
}
/* input{
    margin-bottom: 10px;
} */
.form form button{
    width: 80px;
    height: 30px;
    border-color: #041c32;
    background-color: #2d4263;
    font-size: 16px;
    color: white;
}
.text{
    margin-top: 20px;
}
.text a{
    font-size: 16px;
    color: white;
}
```

### 西游记之西天取经

-   让 `css animation` 无限循环

知识点：

-   `animation-iteration-count` 可以指定动画循环次数

```css
animation-iteration-count:infinite
```

### 【Grid】画一只考拉

-   根据图片完成页面布局

![](image/sfs-lgvm21_7RPwjfpUXl.png)

知识点：

-   `Grid`

### 文本溢出

-   对文本溢出做处理

![](image/pi70gbq23q_vcrJG7Qlxw.png)

知识点：

-   `-webkit-line-clamp`
    -   用来控制文本显示行数的 CSS 样式属性，该属性可以指定一个整数值，表示文本显示的行数上限，超过这个上限则会被隐藏截断。若设置为 0 则表示不显示任何内容，而且需要指定一个固定高度。
    -   通过 `-webkit-line-clamp` 属性来限制行数，从而实现“...”省略的效果

```js
// css
        .more2_info_name{
            overflow: hidden;
            -webkit-line-clamp: 2;
        }

// js
        const info = document.getElementsByClassName("more2_info_name")[0]
        info.style["-webkit-line-clamp"] = 2
        info.style.overflow = "hidden"
```

## Echarts

### 商品销量和销售额实时展示看板

-   补全 `yAxis` 的设置
-   为 `renderChart` 提供正确的数据

知识点：

-   `Echarts`

```javascript
// 指定图表的配置项和数据
const charData = {
    title: {
        text: '云课课程销量和销售额看板',
        width: 100,
        height: 50,
        textStyle: {
            lineHeight: 50,
        },
        left: 'center',

    },
    grid: {
        top: 80,
    },
    tooltip:{
        show: true,
    },
    xAxis: {
        data: [],
    },
    // TODO：补全 `yAxis` 的设置，要求“销售额”（即，配置项 `name`）的位置
    //（即，配置项 `position`）在图表的左侧，“销量”（即，配置项 `name`）的位置
    //（即，配置项 `position`）在图表的右侧。
    yAxis: [{
        type: 'value',
        name: '销售额',
        position: 'left',
    },
    {
        type: 'value',
        name: '销量',
        position: 'right',
    }],
    series: [
        {
            name: '销售额',
            type: 'line',
            data: [],
            yAxisIndex: 0,
            smooth: true
        },
        {
            name: '销量',
            type: 'bar',
            data: [],
            yAxisIndex: 1,
            smooth: true
        }
    ]
};

// 以下代码为模拟后端服务器返回数据
let sale = 0;
let count = 0;
// 销售额
const saleObj = {};
// 销量
const countObj = {};
let index = 0;
function Ajax() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.random();
        const randomSum = () => (randomNum * 500 + 900);
        const randomCount = () => (randomNum * 50 + 80);
        let i = index++ * 10
        let key = `10:${i == 0 ? "00" : i}`;
        if (index < 7) {
            sale = randomSum();
            Object.assign(saleObj, { [key]: sale.toFixed(2) })
            count = randomCount();
            Object.assign(countObj, { [key]: count.toFixed(2) })
        }

        const respondBody = {
            "code": 200,
            "msg": "success",
            "data": {
                saleObj,
                countObj
            }
        };
        setTimeout(() => {
            resolve(respondBody);
        }, 1000)
    })
}

async function renderChart() {
    const result = await Ajax();
    document.querySelector("#result").innerText = JSON.stringify(result);
    const myChart = echarts.init(document.getElementById('main'));
    // TODO：补全代码，正确给 X 轴的时间，以及 Y 轴的商品的销售额 saleObj 
    // 和销量赋值 countObj。
    // console.log(result.data.countObj)
    xData = []
    countData = []
    saleData = []
    console.log(result.data)
    for(key in result.data.countObj){
        xData.push(key)
        countData.push(result.data.countObj[key])
    }
    for(key in result.data.saleObj){
        saleData.push(result.data.saleObj[key])
    }
    charData.xAxis.data = xData
    charData.series[0].data = saleData
    charData.series[1].data = countData
    myChart.setOption(charData, true);
    document.querySelector("#data").innerText = JSON.stringify(charData);
}
renderChart();
let times = 0;
let timer = setInterval(() => {
    renderChart();
    ++times == 6 && clearInterval(timer);
}, 2000)
```

## Node.js

### 资讯接口（多练习容易忘记）

-   根据题目要求写一个后端接口

知识点：

-   `Node.http`

```javascript
// TODO: 待补充代码
const http = require('http')
const serve = http.createServer()
const news = [
    
    {
      "channelId": "5572a108b3cdc86cf39001cd",
      "name": "国内焦点"
    },
    {
      "channelId": "5572a108b3cdc86cf39001ce",
      "name": "国际焦点"
    }
]

serve.on('request',(req,res)=>{
    res.setHeader("Content-type", "text/html;charset=utf8");
    if(req.url == '/news'){
        res.end(JSON.stringify(news))
    }else{
        res.end('404')
    }
})

serve.listen(8080)
```

### 封装 `Promisefy` 函数

-   将 `fs` 中的 `readFile` 方法 `promise` 化

知识点：

- `promise`

  ```javascript
  const n = 0
  const p = new Promise(
    (resolve,reject) => {
      if(n > 0) resolve("请求成功")
      else reject("请求失败")
    }
  )
  p.then(val=>{
    console.log(val)
  },err=>{
    console.log(err)
  })
  // n=0，所以输出“请求失败”
  ```

```javascript
const fs = require('fs')
const path = require('path')
const textPath = path.join(__dirname, '/test.md')

// 读取示例文件
fs.readFile(textPath, 'utf8', (err, contrast) => {
  // 通过promisefy转化为链式调用
  const readFileSync = promisefy(fs.readFile)
  readFileSync(textPath, 'utf8')
    .then((res) => {
      console.log(res === contrast) // 此处结果预期：true，即promise返回内容与前面读取内容一致
    })
    .catch((err) => {})
})
const promisefy = (fn) => {
  // TODO 此处完成该函数的封装
  return function(textPath,code){
    return new Promise((resolve,reject)=>{
      fn(textPath,code,(err,contrast)=>{
        if(err) reject(err)
        else resolve(contrast)
      })
    })
  }
}

module.exports = promisefy // 请勿删除该行代码
```

## 其他

### 【功能实现】搜一搜

-   通过vue2语法实现一个关键字匹配的搜索功能

知识点：

-   Array.prototype.filter()
    -   返回一个新数组，其中元素全部都通过了filter回调函数的测试
-   String.prototype.includes()
    -   返回一个布尔值，用于检查字符串中是否包含指定的子字符串

```javascript
filteredList() {
            // TODO: 请补充代码
            const resList = this.postList.filter((item)=>{
              return item.title.includes(this.search)
            })
            return resList
          }
```

### 【数据交互】RESTful API开发

-   基于 `users.json` 补全 `RESTful API`

| url  | http方法 | 发送内容 | 响应结果         |
| ---- | -------- | -------- | ---------------- |
| list | get      | 空       | 显示所有用户列表 |

知识点：

-   `RESTful`

```javascript
//TODO：请补全获取用户列表代码
app.get("/list",function(req,res){
    fs.readFile(path.resolve(__dirname,"./users.json"),"utf-8",function(err,data){
        res.send(data)
    })
})
```
