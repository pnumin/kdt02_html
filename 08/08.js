const selChange = (s1 , s2 , l1, l2, t1, t2) => {
  //select의 값을 변경
    if (s1.value == "℃") s2.value = "℉" ;
    else s2.value = "℃" ;

    //label의 값을 변경
    l1.innerHTML = s1.value ;
    l2.innerHTML = s2.value ;

    //input 값 초기화
    t1.value = "" ;
    t2.value = "" ;
    t1.focus();
} 


//DOM 생성이 된 후에 
document.addEventListener("DOMContentLoaded", ()=>{
  // 1. DOM 요소 가져오기
  // select
  const sel1 = document.querySelector("#sel1") ;
  const sel2 = document.getElementById("sel2") ;

  // input
  const txt1 = document.querySelector("input") ;
  const txt2 = document.querySelector("[readonly]") ;

  // label
  const lab1 = document.querySelector("[for = txt1]") ;
  const lab2 = document.querySelector("[for = txt2]") ;

  // 2. select 값이 변경될때
  sel1.addEventListener('change', ()=>{
    selChange(sel1 , sel2 , lab1, lab2, txt1, txt2) ;
  }) ;

  sel2.addEventListener('change', ()=>{
    selChange(sel2 , sel1 , lab2, lab1, txt1, txt2) ;
  }) ;
});