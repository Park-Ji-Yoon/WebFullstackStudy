// 함수
// 호이스팅 : 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것

/*
끌어올려진 부분
function sayName01(name){
    console.log("sayName01 name : " + name);
}
var sayName
*/

sayName01("Jiyoon Park");
// sayName02("Jiyoon Park");

function sayName01(name){
    console.log("sayName01 name : " + name);
}
var sayName = function sayName02(name){
    console.log("sayName02 name : " + name);
}

// arguments 객체
function argu(){
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
argu(1, 2, "박", true, "윤");
argu();

// arrow function (ES6 = ES2015)
function getName(name){
    return "Park " + name; 
}
var getName = (name) => "Park " + name;