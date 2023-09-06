// 정규 표현식 객체 생성 + 확인하기

document.getElementById("check1").addEventListener("click",function(){

    // 정규 표현식 객체 생성
    const regExp1 = new RegExp("script");

    // "script" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
    //"java" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "servlet/jsp(java server page)도 조만간 할겁니다"
    const str3 = "java,java,java"


    console.log( "regEx1.test(str1) : " + regExp1.test(str1));
    console.log(regExp1.exec(str1));


    // 없는 경우
    console.log( "regEx1.test(str2) : " + regExp1.test(str2));
    console.log(regExp1.exec(str2));

    // 일치하는게 여러개 있을 경우 
    console.log( "regEx2.test(str3) : " + regExp2.test(str3));
    console.log(regExp2.exec(str3));


})


// 메타 문자 확인하기 
document.getElementById("btn1").addEventListener("click",function() {

    const div1 = document.getElementById("div1");


    const regEx1 =/a/;
    div1.innerHTML += "/a/, apple : " + regEx1.test("apple")+"<hr>"; //true
    div1.innerHTML += "/a/, apple : " + regEx1.test("price")+"<hr>"; //false

    // [adcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색

    const regEx2 = /[adcd]/;
    div1.innerHTML += "/[adcd]/, apple : " + regEx2.test("apple")+"<hr>"; //true
   

    // ^(캐럿) : 문자열의 시작을 의미 
    const regEx3 = /^group/; // 문자열의 시작이 group인 확인
    div1.innerHTML += "/^group/, group100 : " + regEx3.test("group100")+"<hr>"; //true


    // $ 달러 : 문자열의 끝을 의미 
    const regEx4 = /group$/; // 문자열의 끝 group인 확인
    div1.innerHTML += "/^group/, group100 : " + regEx4.test("group100")+"<hr>"; //false



});

//이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup",function(){

    //결과 출력용 span
    const span = document.getElementById("inputNameResult");

    //한글 2~5글자 정규 표현식
    const regExp = /^[가-힣]{2,5}$/;

    // 빈칸인지 검사
    if(this.value.length == 0){
        span.innerText = "";
        return;

    }

    // 유효성 검사
    if(regExp.test(this.value)){
        // 유효한 경우 
        span.innerText = "유효한 이름의 형식입니다.";
        span.style.color = "green";
    } else{
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "green";

    }

})


//주민등록 번호 정규식 검사 
document.getElementById("inputPno").addEventListener("keyup",function(){

    const span = document.getElementById("inputPnoResult");

    if(this.value.length == 0){

        span.innerText = "주민 등록 번호를 작성해주세요"

        span.classList.remove("confirm");
        span.classList.remove("error");

        return;
    }

    // 생년월일(6) - 고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;

    if(regExp.test(this.value)){
        span.innerText = "유효한 주민등록번호 형식입니다."

        span.classList.remove("error");
        span.classList.add("confirm");
    } else{
        span.innerText = "유효하지 않습니다."

        span.classList.remove("confirm");
        span.classList.add("error");
    }

})