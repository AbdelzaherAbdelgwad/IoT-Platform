function check(){

    //var name = form.username.value;
    var form = document.forms[0]
    var name = document.forms[0]["username"].value;
    
   if(name =="user"||name == "admin" ||name =="superadmin") {
    form.action = "subpages/"+name+".html";     
    
    }
}

document.getElementById("home").onclick = function(){
    location.href = "index.html"
}

   