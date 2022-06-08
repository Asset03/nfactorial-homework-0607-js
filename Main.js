// 1
let firstName = 'Aset';
const pi = 3.14;
// 2
let brand = "BMW";
let san = 124124
let isSold = false;
let price = null
let name;
// 3
let cars = {
    brand:'kia',
    name:'k7',
    price:12411,
};
// create new
cars.color = 'red';
// delete 
delete cars.price
// create with bracets
cars['new']='cool';
delete cars['new']
// 4
let colors = new Array('red','black','blue','green')
colors.push('white'); // last add
colors.pop(); //delete last
colors.shift(); // delete first
colors.unshift('red'); // first add
let colors2  = ['brown','gray']
colors = colors.concat(colors2); // concat massives
// 4.map
let car_colors = colors.map( // create new array with function
    colors => 
        `${colors} car `
    
); 
let nums = [1,2,3,4,5]
let twiced = nums.map(nums => { // #2 example
    return nums*2;
});
// 4.filter 
let maw_brand = [
    {name:"k7",brand:'kia'},
    {name:"camry 35",brand:'toyota'}
]
let myCar = maw_brand.filter(
  (maw) =>{
     return maw.brand=="kia";
  }  
);
//4.spread
let arr1 = [1,2,3,4]
let arr2 = [6,7,8,9]
let merge = [0,...arr1,5,...arr2];
// 4.rest
function sum(...args){
    let sum = 0;
    for (let arg of args){
        sum+=arg;
    }
    return sum;
}
// 4.slice
let alpha = ['a','b','c','d','e'];
let a = alpha.slice(-3,-1);
let b =alpha.slice(0,2);
//////////////////////////////////// 5
let x=1
let y = '1';
// console.log(x==y);
// console.log(x===y);
let z = false?"TRUE":"FALSE";
// console.log(z);
// if undefined or null it will false
let c;
let d = null;
// console.log(c==true) 
// console.log(d==true) 
// switchcase
let day = 5;
switch(day){
    case 6:
    console.log('Weekend');
    break;
    case 5:
        console.log('Weekend');
        break;
        default:
            console.log('Work day');
}
///////////////////////////////////////////6
// for(let i = 0;i<10;i++){
//     console.log(i);
// }
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// let j = 0;
// do{
//     j++;
//     console.log(j);
// }while(j<10)
// 7
// function hi(){
//     return 'Hello!!!';
// }
// console.log(hi());
// let sayHi = ()=>
//     "Hello"
// ;
// console.log(sayHi())    
// 8

