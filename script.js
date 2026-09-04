const target = new Date("2026-09-20T13:00:00+07:00").getTime();
function updateCountdown(){
  const now = Date.now();
  let diff = target - now;
  if(diff < 0) diff = 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("days").textContent = String(d).padStart(2,"0");
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

const audio = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", async () => {
  try{
    if(audio.paused){
      await audio.play();
      musicBtn.classList.add("playing");
      musicBtn.textContent = "♫";
    }else{
      audio.pause();
      musicBtn.classList.remove("playing");
      musicBtn.textContent = "♪";
    }
  }catch(e){
    alert("Hãy thêm file music.mp3 vào thư mục website rồi bấm lại nút nhạc.");
  }
});
