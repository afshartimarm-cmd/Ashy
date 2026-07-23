// حذف صفحه ورود بعد از 3 ثانیه

setTimeout(()=>{

let welcome = document.querySelector(".welcome");

if(welcome){

welcome.style.display="none";

}

},3000);




// لینک Joinchat

function joinChat(){

window.open(
"https://t.me/+rcSrLWEYFbAwMjZk"
);

}




// لینک Support

function support(){

window.open(
"https://t.me/VSOIZ"
);

}




// افکت پنجه هنگام لمس


document.addEventListener("click", function(e){

let paw = document.createElement("div");

paw.className="paw";

paw.innerHTML="🐾";

paw.style.left = (e.clientX - 15) + "px";
paw.style.top = (e.clientY - 15) + "px";


document.body.appendChild(paw);


setTimeout(()=>{

paw.remove();

},700);


});
