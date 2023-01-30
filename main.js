const con = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let photos = ["img-0","img-1","img-2","img-3","img-4","img-5"];
let i = 0;

left.addEventListener("click",function(){
    i = i-1
    console.log(i)
    if(i<0){
        i=photos.length-1
        console.log(i)
        con.innerHTML = `<img class="img" src="./img/${photos[i]}.jpeg">`;
        console.log(photos[i])
    }else{
        con.innerHTML = `<img class="img" src="./img/${photos[i]}.jpeg">`;
    }
});

right.addEventListener("click",function(){
    i = i+1
    console.log(i)
    if(i>=photos.length){
        i=0
        console.log(i)
        con.innerHTML = `<img class="img" src="./img/${photos[i]}.jpeg">`;
        console.log(photos[i])
    }else{
        con.innerHTML = `<img class="img" src="./img/${photos[i]}.jpeg">`;
    }
});




// lower.addEventListener("click",function(){
//     num = num-1;
//     count.innerHTML = num;
//     color();
  
// });

// function color() {
//     if (num<0){
//         count.style.color ="red"
//     }
//     else if (num>0){
//         count.style.color ="green"
//     }
//     else{
//         count.style.color ="gray"
//     }
// };







