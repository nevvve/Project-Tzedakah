
/* navbar-under 700 width */
const mainNavToggle = document.querySelector('.main-navbar-toggle_button')
const mainNavMenu = document.querySelector('.main-nav-menu')

mainNavToggle.addEventListener('click', () => {
  mainNavMenu.classList.toggle('active')
})


/* slide */

const slide = document.querySelector(".main-slide");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

const slideItems = document.querySelectorAll(".main-card");
const maxSlide = slideItems.length;
let currSlide = 1;

const pagination = document.querySelector(".slide_pagination");

nextBtn.addEventListener("click", () => {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
});

prevBtn.addEventListener("click", () => {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }
});

// function nextMove() {
//   currSlide++;
//   // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
//   if (currSlide <= maxSlide) {
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//     // 슬라이드 이동 시 현재 활성화된 pagination 변경
//     paginationItems.forEach((i) => i.classList.remove("active"));
//     paginationItems[currSlide - 1].classList.add("active");
//   } else {
//     currSlide--;
//   }
// }
// function prevMove() {
//   currSlide--;
//   // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
//   if (currSlide > 0) {
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//     // 슬라이드 이동 시 현재 활성화된 pagination 변경
//     paginationItems.forEach((i) => i.classList.remove("active"));
//     paginationItems[currSlide - 1].classList.add("active");
//   } else {
//     currSlide++;
//   }
// }

// // 버튼 엘리먼트에 클릭 이벤트 추가하기
// nextBtn.addEventListener("click", () => {
//   // 이후 버튼 누를 경우 현재 슬라이드를 변경
//   nextMove();
// });
// // 버튼 엘리먼트에 클릭 이벤트 추가하기
// prevBtn.addEventListener("click", () => {
//   // 이전 버튼 누를 경우 현재 슬라이드를 변경
//   prevMove();
// });

// // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
// window.addEventListener("resize", () => {
//   slideWidth = slide.clientWidth;
// });

// // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
// for (let i = 0; i < maxSlide; i++) {
//   // 각 페이지네이션마다 클릭 이벤트 추가하기
//   paginationItems[i].addEventListener("click", () => {
//     // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
//     currSlide = i + 1;
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//     // 슬라이드 이동 시 현재 활성화된 pagination 변경
//     paginationItems.forEach((i) => i.classList.remove("active"));
//     paginationItems[currSlide - 1].classList.add("active");
//   });
// }

// // 드래그(스와이프) 이벤트를 위한 변수 초기화
// let startPoint = 0;
// let endPoint = 0;

// // PC 클릭 이벤트 (드래그)
// slide.addEventListener("mousedown", (e) => {
//   console.log("mousedown", e.pageX);
//   startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
// });

// slide.addEventListener("mouseup", (e) => {
//   console.log("mouseup", e.pageX);
//   endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
//   if (startPoint < endPoint) {
//     // 마우스가 오른쪽으로 드래그 된 경우
//     console.log("prev move");
//     prevMove();
//   } else if (startPoint > endPoint) {
//     // 마우스가 왼쪽으로 드래그 된 경우
//     console.log("next move");
//     nextMove();
//   }
// });

// // 모바일 터치 이벤트 (스와이프)
// slide.addEventListener("touchstart", (e) => {
//   console.log("touchstart", e.touches[0].pageX);
//   startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
// });
// slide.addEventListener("touchend", (e) => {
//   console.log("touchend", e.changedTouches[0].pageX);
//   endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
//   if (startPoint < endPoint) {
//     // 오른쪽으로 스와이프 된 경우
//     console.log("prev move");
//     prevMove();
//   } else if (startPoint > endPoint) {
//     // 왼쪽으로 스와이프 된 경우
//     console.log("next move");
//     nextMove();
//   }
// });

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

/* pagenation */

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="main-page_li active">•</li>`;
  else pagination.innerHTML += `<li class="main-page_li">•</li>`;
}
const paginationItems = document.querySelectorAll(".slide_pagination > li");
console.log(paginationItems);


for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

