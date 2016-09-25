var button=document.getElementById('counter');

button.onclick=function(){
    
    //Create a Request Object
    var request=new XMLHttpRequest();
    
    
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function() {
        if(request.readystate==XMLHttpRequest.DONE) {
            if(request.status==200) {
                var counter=request.responseText;
                var span=document.getElementById('count');
                sapn.innerHTML=counter.toString();
            }
        }
    };
    
    // Make Request
    
    
    request.open('GET','http://marymini.imad.hasura-app.io/counter',true);
    request.send(null);
};