document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  function nextPage() {
    pages[currentPage].classList.remove("rotateY-0");
    pages[currentPage].classList.add("rotateY-180");

    currentPage = (currentPage + 1) % pages.length;

    setTimeout(() => {
      pages[currentPage].classList.remove("rotateY-180");
      pages[currentPage].classList.add("rotateY-0");
    }, 1000);
  }

  setInterval(nextPage, 3000);
});
