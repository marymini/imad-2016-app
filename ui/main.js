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
    
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};