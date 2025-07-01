const tabs = document.querySelector(".tabs");
const tabButtons = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab")) {
    // 모든 탭에서 active 제거
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // 클릭된 탭에 active 추가
    e.target.classList.add("active");

    // 모든 콘텐츠 숨김
    contents.forEach((c) => c.classList.remove("show"));
    // 클릭된 탭의 data-id에 맞는 콘텐츠만 표시
    const targetId = e.target.dataset.id;
    document.getElementById(targetId).classList.add("show");
  }
});
