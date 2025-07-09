const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modalContent = document.querySelector(".modal-content");

// 모달 열기
openBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // flex로 가운데 정렬
});

// 모달 닫기 (닫기 버튼)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 닫기 (배경 클릭)
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 안쪽 클릭 시 닫히지 않게
modalContent.addEventListener("click", (e) => {
  e.stopPropagation(); // 이벤트 버블링 중단
});
