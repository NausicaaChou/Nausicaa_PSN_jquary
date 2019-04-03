//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index.route");
const details=require("./routes/details.route");

var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'))
/*使用路由器来管理路由*/
app.use("/index",index);
//测试: http://localhost:3000/details?lid=9
app.use("/details",details);

