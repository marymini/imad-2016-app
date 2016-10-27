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
       
        `
    },
   'article2':{
       title:'Article2 Mini',
        heading:'Article2 Specky',
        date:'Sep 15 ,2016',
        content:`
       
        `
    },
   'article3':{
        title:'Article3 Specky',
        heading:'Article3 Specky Shaji',
        date:'Sep 17 ,2016',
        content:`
       
        `
    } ,
    'article4':{
        title:'My Additional Practie One',
        headng:'Practice One',
        date:'Sep 19 2016',
        content:`
   
    
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
var counter=0;
app.get('/counter',function(req,res){
 counter=counter+1;
   res.send(counter.toString()); 
});
var names=[];
app.get('/submit-name',function(req,res) {
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
var pool=new pool(config);
app.get('articles//:articleName',function(req,res){
    
    pool.query("select * from article where title='"+req.params.articleName+"'",function(err,result){
        if (err) {
            res.status(500).send(err.Tostring());
        } else {
            if(result.rows.legth===0){
                re.status(404).send('Article Not found');
                
            } else{
                var articleData=result.rows[0];
                res.send(createTemplate(articleData));
            }
            
        }
    })
 });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
