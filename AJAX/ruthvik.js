var btn = document.getElementById('btn');

btn.addEventListener('click' , function(){
    var xhr =new XMLHttpRequest();
    xhr.open("GET","ruthvik.json",true);
    xhr.onload = function(){
        if(this.status == 200){
            var user = JSON.parse(this.responseText);
           var output ='';

           output += '<ol>' +
           '<li> ID :'+user.name+'</li>'+
           '<li> Name :'+user.age+'</li>'+
           '<li> Email :'+user.email+'</li>'+
           '<li> address :'+user.gamer_id+'</li>'+'</ol>';

           document.getElementById('result').innerHTML = output;
           console.log(user);
        }}
        xhr.send();
})