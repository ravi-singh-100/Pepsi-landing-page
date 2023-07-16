let small_black_pepsi=document.querySelector('img.small_black_pepsi');
let small_blue_pepsi=document.querySelector('img.small_blue_pepsi');
let small_silver_pepsi=document.querySelector('img.small_silver_pepsi');
let pepsi=document.querySelector('img.pepsi');
  let home=document.getElementById('home');
  let hamburger_icon=document.querySelector('i.fa-bars');



const black = () => {
home.style.backgroundColor="black";
pepsi.style.animation="pepsi_move_2 1s ease-out 1";
pepsi.src="./pepsi images/black_pepsi.png"

}
const blue = () => {
home.style.backgroundColor="#0043ffe0";
pepsi.style.animation="pepsi_move_2 1s ease-out 1";
pepsi.src="./pepsi images/blue_pepsi.png";

}
const silver = () => {
    
home.style.backgroundColor=" #ff1a1a";
// pepsi.style.animation="pepsi_move_2 1s ease-out 1";
pepsi.src="./pepsi images/silver_pepsi.png";


//  show_hamburger_menu = () =>{
//   document.querySelector('section.hidden').style.display="none";
//   const hide_hamburger_menu   = () =>{
//     document.querySelector('section.hidden').style.display="block";}

//   hamburger_icon.addEventListener("click",hide_hamburger_menu);}

}

        small_black_pepsi.addEventListener("click",black);
        small_silver_pepsi.addEventListener("click",silver);
        small_blue_pepsi.addEventListener("click",blue);
     