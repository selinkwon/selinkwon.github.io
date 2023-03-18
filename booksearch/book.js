// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유료


// Open API
// ㄴ 공공 개발자 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터
// ...

// ajax
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
// fetch() 로도 구현 가능 (일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용

let page = 1;
let size = 20;

const query = document.querySelector(".query");
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("submit", e => {
  e.preventDefault();
  if (query !== "") {
    page = 1;
    searchRequest(query.value, page);
    query.value="";
  }
});

function searchRequest(query, page) {
  $.ajax({
    "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=${size}&target=title`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "KakaoAK a8a98c70ec11ab7c7eab5505d40fe780"
    },
  }).done((response)=> {
        const container = document.querySelector(".container");
        let result = response.document;
        for(let i=0;i<result.length;i++){
          if(result[i].thumbnail !== ""){
              const card = document.createElement("div");
              card.setAttribute("class","card");

              const bookImg = document.createElement("img");
              bookImg.setAttribute("class","book-img");
              bookImg.src = result[i].thumbnail;
              bookImg.addEventListener("click", e =>{
                  location.href = result[i].url;
              })
              card.appendChild(bookImg);

              const bookTitle = document.createElement("h4");
              bookTitle.setAttribute("class","book-title");
              bookTitle.innerText = result[i].title;
              card.appendChild(bookTitle);

              const price = document.createElement("span");

              if(result[i].sale_price > 0){
                price.setAttribute("class","price");
                price.innerText = result[i].sale_price + "원";
              }
              else{
                price.setAttribute("class","zero");
                price.innerText = "품절";
              }
              card.appendChild(price);

              const bookInfo = document.createElement("p");
              bookInfo.setAttribute("class","book-info");

              card.appendChild(bookInfo);

              const author = document.createElement("span");
              author.setAttribute("class","author");
              const publisher = document.createElement("span");
              publisher.setAttribute("class","publisher");

              author.innerText = result[i].author+" ";
              publisher.innerText = "| "+result[i].publisher;

              bookInfo.appendChild(author);
              bookInfo.appendChild(publisher);

              container.appendChild(card);
          }
        }

        const pageMove = document.querySelector(".move-page");
        const backBtn = document.createElement("img");
        
        if(page > 1){
          backBtn.setAttribute("class","backBtn");
          backBtn.setAttribute("src","https://em-content.zobj.net/thumbs/240/toss-face/342/left-arrow_2b05-fe0f.png");

          backBtn.addEventListener("click",e=>{
            page --;
            searchRequest(query,page);
          })
        }

        pageMove.append(backBtn);

        pageMove.append(`${page} / ${Math.ceil(response.meta.pageable_count/size)}`);

        const nextBtn = document.createElement("img");

        if(response.meta.is_end === false){
          nextBtn.setAttribute("class","nextBtn");
          nextBtn.setAttribute("src","https://em-content.zobj.net/thumbs/240/toss-face/342/right-arrow_27a1-fe0f.png");

          nextBtn.addEventListener("click",e=>{
            page ++;
            searchRequest(query,page);
          })
        }
        pageMove.append(nextBtn);
    });
}

