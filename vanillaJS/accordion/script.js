const questions = document.querySelectorAll(".question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // 모든 답변 닫기
    document.querySelectorAll(".answer").forEach((a) => {
      if (a !== answer) a.classList.remove("show");
    });

    // 클릭한 항목은 토글 (닫혀 있으면 열고, 열려 있으면 닫고)
    answer.classList.toggle("show");
  });
});

// .question 클래스를 가진 버튼들을 모두 선택

// 각 버튼에 클릭 이벤트 등록

// 클릭한 버튼 바로 아래에 있는 .answer 요소 선택

// 모든 .answer 요소 반복하면서

// 클릭한 답변이 아닌 경우 show 클래스 제거

// 클릭한 답변은 show 클래스 토글
