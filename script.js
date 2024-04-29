

Array.from(document.getElementsByTagName("input")).forEach((e,i) =>{
  e.addEventListener('keyup', (el) => {

    if(e.value.length > 0) {
      document.getElementsByClassName('bi-geo-alt')[i].style.transform = "rotate(360deg)";
      // document.getElementsByClassName('bi-calendar')[i].style.color = "yellow";
      // document.getElementsByClassName('bi-person-plus')[i].style.color = "yellow";
    }else {
      document.getElementsByClassName('bi')[i].style.color = "red";
    }
  });
})
get

let menu_btn = document.getElementsByClassName("bi-three-dots")[0];
let menu_bx = document.getElementById('menu_bx');

menu_btn.addEventListener("click",()=> {
  menu_bx.classList.toggle('ul_active');
})