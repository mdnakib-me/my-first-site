const greetBtn = document.getElementById("greetBtn");
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "💡light" : "🌑dark";
  localStorage.setItem("theme", isLight ? "light" : "dark");
  const time = new Date().toLocaleDateString("bn-BD");
  console.log("theme is changed", time);
});
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "theme";
}
// messages button
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Evening";
  if (hour < 20) return "Good Afternoon";
  return "Good Night";
}
greetBtn.addEventListener("click", function () {
  const time = new Date().toLocaleTimeString("bn-BD");
  msg.textContent =
    getGreeting() + "! এখন সময় " + time + " — আপনার যাত্রা শুরু হলো 🎉";
  console.log("Greet বাটনে ক্লিক হয়েছে:", time);
});
//   yearspan
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
// messsage
const msg = document.getElementById("msg");
