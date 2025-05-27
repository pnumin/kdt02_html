


document.addEventListener("DOMContentLoaded", ()=>{
  const cols = document.querySelectorAll(".col") ;
  const bt = document.querySelector(".row > button") ;
  const msg = document.querySelector("#msg") ;
  let arr = [0,0,0,0,0,0,0,0,1] ;
  let flag = false ; 

  for(let [idx, col] of cols.entries()) {
    // col.innerHTML = idx + 1 ;
    col.addEventListener("click" , ()=>{
      if ( !flag ) {
        msg.innerHTML = "폭탄을 섞어주세요" ;
        return ;
      }
    }) ;
  }

  bt.addEventListener("click", ()=>{
    if ( !flag ) {
      arr.sort(() => Math.random() - 0.5);
      console.log(arr);
      flag = true ;
      bt.innerHTML = "게임중 ...." ;
    }
  })
});