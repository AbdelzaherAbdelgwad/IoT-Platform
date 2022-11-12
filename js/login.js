function check(){

    //var name = form.username.value;
    var form = document.forms[0]
    var name = document.forms[0]["username"].value;
    
   if(name =="user") {
    form.action = "subpages/"+name+".html";     
    
    }
    else if(name =="Badmin" || name =="Buser" || name== "Bsuperadmin"){
        form.action = "subpages/Bank/"+name+".html"; 
    }
    else if(name =="Cadmin" || name =="Cuser" || name== "Csuperadmin"){
        form.action = "subpages/Company/"+name+".html"; 
    }
    else if(name =="Hadmin" || name =="Huser"){
        form.action = "subpages/Hospital/"+name+".html"; 
    }
    else{
        alert("Wrong username");
    }
}

document.getElementById("home").onclick = function(){
    location.href = "index.html"
}

   