var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article1':{
        title:'Article1',
        heading:'Article1',
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
        title:'Article2',
        heading:'Article2',
        date:'Sep 15 ,2016',
        content:`
        <p>
         This is the content of my second article.
        </p>
        `
    },
   'article3':{
        title:'Article3',
        heading:'Article3',
        date:'Sep 17 ,2016',
        content:`
        <p>
         This is the content of my Third article.
        </p>
        `
    } 
};
function createTemplate(data) {
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
