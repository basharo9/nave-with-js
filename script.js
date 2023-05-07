window.addEventListener("scroll", function(){
   let header = document.getElementById("header");
   header.classList.toggle("sticky", this.window.scrollY > 200);
})