var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article1':{
        title:'Article1 Mini Shaji',
        heading:'Article1 Mini Shaji',
        date:'Sep 5 ,2016',
        content:`
        <p>
        This is the content of my first article.This is the content of my first article.This is the content of my first article.
        This is the content of my first article.This is the content of my first article.This is the content of my first article.
        </p>
        <p>
        This is the content of my first article.This is the content of my first article.This is the content of my first article.
        This is the content of my first article.This is the content of my first article.This is the content of my first article.
        </p>
        <p>
        This is the content of my first article.This is the content of my first article.This is the content of my first article.
        This is the content of my first article.This is the content of my first article.This is the content of my first article.
        </p>
        `
    },
   'article2':{
        title:'Article2 Mini',
        heading:'Article2 Specky',
        date:'Sep 15 ,2016',
        content:`
        <p>
         This is the content of my second article.
        </p>
        `
    },
   'article3':{
        title:'Article3 Specky',
        heading:'Article3 Specky Shaji',
        date:'Sep 17 ,2016',
        content:`
        <p>
         This is the content of my Third article.
        </p>
        `
    } ,
    'practice1':{
        title:'My Additional Practie One',
        headng:'Practice One',
        date:'Sep 19 2016',
        content:
        `
    <p>
    Types of Viruses</p>
    <HR size=4 width=50% color="red"><center>
    <p align ="left" ><u><b>Boot Sector Virus</b></u><br>
    These viruses infect the boot record which is responsible 
    for loading the operating system in the memory.Boot sector virus becomes active at the time of booting.
    Examples-Disk killer,Stone virus </p>
    
        `
        }
};
function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
    <title>
    ${title}
    </title>
     <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet"/>
   <body>
   <div class="container">
   <a href="/">HOME</a>

   </div>
   <hr/>
   <h3>
   ${heading}
   </h3>
   <div>
   ${date}
   </div>
   <div>
   ${content}
   </div>
      </body>
   
       </html>
   `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
 });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
