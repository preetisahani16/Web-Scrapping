// let fs=require("fs")

// console.log(1);

// fs.readFile("f.txt",function(err,data){
//     console.log(data.toString());

// })

// console.log(2);
let request=require("request");
let cheerio=require("cheerio")
let fs=require("fs");
let loadedHtml;

function responseHandler(err,res,body){
    if(!err){
        loadedHtml=cheerio.load(body);
     //   let allComments=loadedHtml("")
//       fs.writeFileSync("index.html",body)
        let allComments=loadedHtml(".cb-com-ln.cb-col.cb-col-90");
        let topComment =loadedHtml(allComments[0]);
        let comment =topComment.text();
      //  console.log(loadedHtml(allComments[0]);
        
        console.log(comment);
    }
}
request("https://www.cricbuzz.com/live-cricket-scores/32267/ind-vs-eng-1st-t20i-england-tour-of-india-2021",responseHandler);













