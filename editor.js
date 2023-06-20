let img = document.getElementById("img");
let upload = document.getElementById("upload");
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let download = document.getElementById("download");
let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");





const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext('2d');




//اطار من الكانفس تو دي 
//----هنا بقل له لما الصفحة تحمل اخفي لي الثلاثة دول
window.onload = function(){
    download.style.display='none';
    reset.style.display='none';
        imgBox.style.display='none';
}

//--- هنا بقل له لما الابلود يتغير اعمل لي الفنكشن دي ما المقصود بيتغير
//-- المقصود يتم اضافة صورة جديدة
upload.onchange=function(){
    download.style.display='block';
    reset.style.display='block';
        imgBox.style.display='block';

        //--- عايزين الان الجافا تقرأ الصورة التم رفعها تقرأ وتظهر

        //-- الجافا فيها كلاس من خلاله نقرا الملفات او الصور
    let file= new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload =function(){
        img.src=file.result }


        img.onload= function(){
canvas.width = img.width;
canvas.height = img.height;
            ctx.drawImage(img,0,0,canvas.width,canvas.height);
            img.style.display='none';
        }
        
}

/// انا دلوقتي هضيف فلاتر
let filters = document.querySelectorAll("ul li input");

//يبقى كدا الفيلتر دا هو كل فلتر موجودة في الفترز 
filters.forEach( filter =>{
    filter.addEventListener('input',function(){
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    
    
    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height);


})
   } )



  function restValue(){
    img.style.filter='none';

    saturate.value='100';
    contrast.value='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    hueRotate.value='0';




   }

   download.onclick= function(){

    download.href = canvas.toDataURL();
   }