var button=document.getElementById('counter');
button.onclick=function(){
    
    //Create a Request Object
    var request=new XMLHttpRequest();
    
    
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function() {
        if(request.readystate===XMLHttpRequest.DONE) {
            if(request.status===200) {
                var counter=request.responseText;
                var span=document.getElementById('count');
                sapn.innerHTML=counter.toString();
            }
        }
    };
    
    // Make Request
    
    var nameInput=document.getElementById('name');
var name=nameInput.value;
    request.open('GET','http://marymini.imad.hasura-app.io/counter',true);
    request.send(null);
};


var submit=document.getElementById('submit_btn');
submit.onclick=function() {
    var names=['name1','name2','name3'];
    for(var i=0;i<names.length;i++) {
        list+='<li>'+name[i]+'</li>';
         var ul=document.getElementById('namelist');
ul.innerHTML=list;
}
 request.open('GET','http://marymini.imad.hasura-app.io/submit-name?name=+name',true);
    request.send(null);
};