var button=document.getElementById('counter');
button.onclick=function(){
    
    //Create a Request Object
    var request=new XMLHttpRequest();
    
    
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function() {
        if(request.readystate==XMLHttpRequest.DONE) {
            if(request.status==200) {
               var counter=request.responseText;
               var span=document.getElementById('counter');
              span.innerHTML=counter.toString();
           }
        }
    };
    
    // Make Request
    

   request.open('GET','http://marymini.imad.hasura-app.io/count',true);
    request.send(null);
};

   
var submit=document.getElementById('submit_btn');
submit.onclick=function() {
    
     var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readystate==XMLHttpRequest.DONE) {
            if(request.status==200) {
               var names=['name1','name2','name3'];
    for(var i=0;i<names.length;i++) {
        list+='<li>'+name[i]+'</li>';
         var ul=document.getElementById('namelist');
ul.innerHTML=list;
            }
        }
        }
    };
 var nameInput=document.getElementById('name');
var name=nameInput.value;
 request.open('GET','http://marymini.imad.hasura-app.io/submit?name=+name',true);
    request.send(null);
};