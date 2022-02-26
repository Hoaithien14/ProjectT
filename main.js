const header = document.querySelector("header")
window.addEventListener("scroll", function(){
  x = window.pageYOffset
  if(x>0){
    header.classList.add("sticky")
  }
  else {
    header.classList.remove("sticky")
  }
})

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector(".aspect-ratio-169")
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0

// console.log(imgPosition)
// ra chiều ngang

imgPosition.forEach(function(image,index){
image.style.left = index*100 + "%"
dotItem[index].addEventListener("click",function(){
 slider (index)
})
})

function imgSlide (){
index++;
console.log(index)
if (index>=imgNuber) {index=0}
slider (index)
}
function slider (index) {
imgContainer.style.left = "-"+index*100 + "%"
const dotActive = document.querySelector('.active')
dotActive.classList.remove("active")
dotItem[index].classList.add("active")
}
setInterval(imgSlide,5000)




// menu slider cartegory
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
menu.addEventListener("click",function(){
  menu.classList.toggle("block")
})
})


// ---------------------------------PRODUCT----------------------------------------------------------------
// --hover ảnh to
const bigImg =document.querySelector(".product-content-left-big-img img")
const smallImg =document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
  imgItem.addEventListener("click",function(){
   bigImg.src = imgItem.src
  })

})






















// ---------------------------------------thanh menu click chi tiết and bảo quản
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
  baoquan.addEventListener("click",function(){
    document.querySelector(".product-content-right-buttom-content-chitiet").style.display = "none";
    document.querySelector(".product-content-right-buttom-content-baoquan").style.display = "block";

    
  })
}
if(chitiet){
  chitiet.addEventListener("click",function(){
    document.querySelector(".product-content-right-buttom-content-chitiet").style.display = "block";
    document.querySelector(".product-content-right-buttom-content-baoquan").style.display = "none";
  })
}
// 
const butTon = document.querySelector(".product-content-right-buttom-top")
if(butTon) {
  butTon.addEventListener("click",function(){
   document.querySelector(".product-content-right-buttom-content-big").classList.toggle("activeB")
  })
}