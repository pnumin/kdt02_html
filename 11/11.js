document.addEventListener("DOMContentLoaded", ()=>{
  const ul = document.querySelector("main > ul") ;
  const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2a350cfbca6c428eb04c71e21cc681e7&targetDt=20240528";
  
  // console.log(url)
  fetch(url) 
  .then(resp => resp.json())
  .then(data => {
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList ;
    const mvList = dailyBoxOfficeList.map((item) => 
           `<li>
                <span class="spRank">${item.rank}</span> 
                <span class="spMv">${item.movieNm}</span>
            </li>` 
                                  ) ;
    let tags = mvList.join('') ;
    console.log(tags)  
    ul.innerHTML = tags ;                              
     
  })
  .catch(err => console.log(err)) 
  ;

});