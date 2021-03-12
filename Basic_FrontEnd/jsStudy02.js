// UI

// window 객체
// 비동기 callback함수 (스택이 다 비워지고 나서 실행됨)
// setTimeout(실행할 것, 시간) : 설정한 시간 후에 실행할 것이 실행됨
function runSTO(){
    console.log("runSTO function start");
    setTimeout(function(){
        var msg = "hello codesquad";
        console.log(msg);
    }, 1000);
    console.log("runSTO function end");
}
// console.log("runSTO start");
// runSTO();
// console.log("runSTO end");

// setInterval(실행할 것, 시간) : 일정 시간마다 실행할 것이 실행됨
function runSIV(){
    var count = 0;
    console.log("runSIV function start");
    var repeat = setInterval(function(){
        count += 1;
        if(count >= 5){
            clearInterval(repeat);
        }
        var msg = "bye codesquad";
        console.log(msg);
    }, 1500);
    console.log("runSIV function end");
}
console.log("runSIV start");
runSIV();
console.log("runSIV end");