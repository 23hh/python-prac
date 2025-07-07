const images = [
  "https://cdn.pixabay.com/photo/2019/05/14/17/07/web-development-4202909_1280.png",
  "https://media.istockphoto.com/id/157473191/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%AB%E3%81%AA%E7%B7%91%E3%81%AE%E8%91%89%E3%81%AE%E7%99%BD%E3%82%AF%E3%83%AA%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%83%91%E3%82%B9.jpg?s=2048x2048&w=is&k=20&c=TuFHqIjm4VSa-CYsSlCbmmAroJm9eiH3PDqkFYX2W_M=",
  "https://cdn.pixabay.com/photo/2022/10/24/09/31/flower-7543035_1280.jpg",
];

let current = 0;

const imgEl = document.getElementById("image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= images.length) {
    current = 0;
  }

  imgEl.src = images[current];
});

prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  imgEl.src = images[current];
});
