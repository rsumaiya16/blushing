
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");


yesBtn.addEventListener("click", () => {
    response.textContent = "I knew you'd say YES! ";
    response.style.color = "green";
});


noBtn.addEventListener("mousemove", () => {
  
    const x = Math.floor(Math.random() * 300) - 150; 
    const y = Math.floor(Math.random() * 300) - 150; 
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});