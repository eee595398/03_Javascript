//문자열 관련 함수
document.getElementById("btn1").addEventListener("click",function(){ 


    // 문자열.indexof("str") : 
    // 문자열에서 "str"과 일치하는 부분이 시작되는 인덱스를 반환
    // 없으면 -1반환

    const str1="Hello world";

    console.log(str1.indexOf("e")); // 1 
    console.log(str1.indexOf("l")); // 2 //가장 먼저 검색된 인덱스 반화 


    // 문자열.substring(시작인덱스,종료인덱스) : 문자열 일부 잘라내기 
    // * 시작인덱스 이상 종료인덱스 미만 

    const str2 ="abcdefg";
    console.log(str2.substring(0,3)) //abc


    // 문자열.split("구분자") : 문자열을 "구분자"로 잘라서 배열로 반환
    const str3 = "햄버거, 피자, 김밥";
    const arr = str3.split(", ");
    console.log(arr);


});

// 숫자관련 함수
document.getElementById("btn2").addEventListener("click",function(){

    // Infinity 리터럴 확인 
    console.log(5/0);

    if(5/0==Infinity){
        console.log("무한 입니다");
    }

    //NaN 리터럴 확인 

    console.log("aaa" *400);

    // isNaN(값) : 값이 NaN이면 true, 아니면  false

    if( isNaN("aaa"*100)){
        console.log("숫자가 아닙니다")
    }


    // Math.random() : 0이상 1미만의 난수 발생(0<=random<1)
    console.log(Math.random(
    ))


    // 소수점 관련 함수
    // round(), cell(), floor(), trunc()
    // 반올림    올림     내림    버림


    // 소수점 자리를 지정할 수 없다
    console.log( Math.round(10.155)); // 11


    // 버튼 배경색 랜덤으로 바꾸기 

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    this.style.backgroundColor ="rgb(" + r+ ","+g+ ","+b +")";

    // 숫자.toFixed(자릿수) : 지정된 자릿수까지 반올림해서 표현
    console.log((3.55).toFixed(1))

});


// 형변환 확인
// parseInt() : 정수로 변환함("3.14"-->3)
console.log(parseInt());

// parseFloat() : "정수" -> 정수,, "실수"-> 실수 ///문자타입이 숫자형태로
console.log( parseFloat("3.14")); 