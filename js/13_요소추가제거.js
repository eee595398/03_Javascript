document.getElementById("add").addEventListener("click",function(){

    // div 요소 생성
    const div = document.createElement("div");

    // div에 row 클래스 추가
    div.classList.add("row");

    //<div class="row"><div>




    //input요소 생성

    const input = document.createElement("input");

    input.classList.add("in");
    //<input class="in">


    // span 요소 생성

    const span = document.createElement("span");

    span.classList.add("remove");
    
    // <span class="remove"></span>


    span.innerText="X";


    div.append(input);
    div.append(span);
    //  //<div class="row">
    // <input class="in">
    // <span class="remove"></span>
    //</div>
    //


    document.getElementById("container").append(div);

    span.addEventListener("click", function(){
        span.parentElement.remove();

    })

})