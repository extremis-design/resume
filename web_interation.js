function togglemenu() {
    console.log('working');
    let nav_left = document.querySelector('.nav_left');
    let detail = document.querySelector('.detail');
    let list = document.querySelectorAll('.list_span');
    nav_left.classList.toggle('active');
    detail.classList.toggle('active');
    for(let i=0;i<7;i++){
      list[i].classList.toggle('active');
    }
}; 



let header = document.querySelector('.nav_left_oder');
let btns = header.querySelectorAll('#list_atag');
for (var i = 0; i < 7; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("highlight");
  current[i].className = current[i].className.replace("highlight", "");
  this.className += " highlight";
  console.log(i);
  });
}
//  Close mobile Menu when clicking on a menu item
function hideMobileMenu(){
    let nav_left = document.querySelector('.nav_left');
    let list = document.querySelector('#list_name');
    if (window.innerWidth <= 768) {
        nav_left.classList.remove('active');
    }
  }
  // var header = document.getElementById("myDIV");
  // var btns = header.getElementsByClassName("btn");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //   var current = document.getElementsByClassName("active");
  //   current[0].className = current[0].className.replace(" active", "");
  //   this.className += " active";
  //   });
  // }


