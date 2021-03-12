var el = document.querySelector(".outside");
el.addEventListener("click", function(event){
    var target = event.target;
    console.log("clicked!!", target.className, target.nodeName);
});