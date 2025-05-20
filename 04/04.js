const check1 = (e) => {
  // e.preventDefault();
  console.log('check1') ;
  let txt1 = document.getElementById("txt1").value ;

  //공백 제거
  txt1 = txt1.replaceAll(' ', '') ;

  //문자열 반복문
  let s = '' ;
  for(let i = txt1.length - 1 ; i >=0 ; i--) {
    s = s + txt1[i] ;
  }
  console.log(s);

  //문자열 비교
  if ( txt1 == s) document.getElementById("txt2").value = "회문입니다.";
  else document.getElementById("txt2").value = "회문이 아닙니다.";
  
}

const check2 = () => {
  console.log('check2') ;
  let txt1 = document.getElementById("txt1").value ;

  let hap = 0 ;
  for(let c of txt1) {
    if ( !isNaN(c) ) hap = hap + parseInt(c) ;
  }

  document.getElementById("txt2").value = hap ;
}

const check3 = () => {
  document.getElementById("txt1").value = "" ;
  document.getElementById("txt2").value = "" ;
}