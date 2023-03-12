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

const query = document.querySelector(".query");
let page = 1;

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e => {
  e.preventDefault();
  if (query !== "") {
    page = 1;
    searchRequest(query.value, page);
  }
});

function searchRequest(query, page) {
  $.ajax({
    "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=1&size=10&target=title`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "KakaoAK a8a98c70ec11ab7c7eab5505d40fe780"
    },
  }).done((response)=> {
        // container 안에
        // 새로 생성 및 구성 완료한 result-card 요소를 추가
    });
}

