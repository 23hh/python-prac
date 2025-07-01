const btn = document.getElementById("toggleBtn");
let isOn = false;

btn.addEventListener("click", () => {
  isOn = !isOn;
  btn.textContent = isOn ? "커짐" : "꺼짐";
  document.body.style.backgroundColor = isOn ? "yellow" : "green";
});
