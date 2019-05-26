var http = require("http");
const https = require("https");

var url = "http://blog.sina.com.cn/";
var url1 = "https://www.jianshu.com/";

var cheerio = require("cheerio");

var fs = require("fs");

https.get(url1, function(res) {
  var html = "";
  res.on("data", function(chunk) {
    html += chunk;
  });
  res.on("end", function() {
    var $ = cheerio.load(html);
    var count = 0;
    $(".note-list .content .title").each(function() {
      //.art-list a
      // console.log($(this).text());
      count++;
      var oText = $(this).text();
      var time = new Date().valueOf();
      fs.writeFile("./title/boke" + count + ".txt", oText, function(err) {
        //文件路经，写入的内容，回调函数
        if (err) throw new Error("写文件失败" + err);
        console.log("成功写入文件");
      });
    });
  });
});
