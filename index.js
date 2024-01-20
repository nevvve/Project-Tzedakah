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


/* navbar-under 700 width */
const mainNavToggle = document.querySelector('.main-navbar-toggle')
const mainNavMenu = document.querySelector('.main-nav-menu')

mainNavToggle = addEventListener('click', () => {
        mainNavMenu.classList.toggle('active')
})
