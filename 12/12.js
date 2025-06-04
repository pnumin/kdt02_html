//데이터 가져오기
const getData = (txtKw, content) => {
  const apikey = "8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D" ;
  const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?" ;
  let url = `${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A` ;
  url = `${url}&_type=json&keyword=${txtKw.value}` ;

  console.log(url);

  //data fetch
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      const items = data.response.body.items.item ;
      let tags = items.map(item => `
        <div class="card">
          <div class="cardImg">
            <img src=${item.galWebImageUrl} />
          </div>
          <div class="cardDiv">
            <span class="sp1">${item.galTitle}</span>
            <span class="sp2">${item.galPhotographyLocation}</span>
          </div>
        </div>
        `) ;

      tags = tags.join("") ;
      content.innerHTML = tags ;
    })
    .catch(err => console.log(err)) ;

  console.log("fetch ...")
  
}

//DOM 생성시 
document.addEventListener("DOMContentLoaded" , ()=>{
  const txtKw =document.querySelector("#txt1") ;
  const bt1 = document.querySelector(".formDiv > button") ;
  const bt2 = document.querySelector(".formDiv > [type=reset]") ;
  const content = document.querySelector(".content") ;

  //확인
  bt1.addEventListener("click", (e)=>{
    e.preventDefault() ;

    if ( txtKw. value == "") {
      alert("키워드를 입력하세요.") ;
      txtKw.focus() ;
      return ;
    }

    getData(txtKw, content) ;
  });


  //취소
  bt2.addEventListener("click" , ()=>{
    content.innerHTML = "" ;
  });
});