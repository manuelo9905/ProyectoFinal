window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token");
    }
    else{
        window.location.href = "index.html";
    }
}