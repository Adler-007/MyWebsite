//这是服务器启动文件
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const html = fs.readFileSync("./public/index.html");
  res.end(html); //返回html文件
});

server.listen(8000, () => {
  console.log("当前服务器已经监听到 localhost:8000端口");
});
