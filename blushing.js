
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");


yesBtn.addEventListener("click", () => {
    response.textContent = "sesh lifetime feshe gesish ";
    response.style.color = "purple";
});


noBtn.addEventListener("mousemove", () => {
  
    const x = Math.floor(Math.random() * 300) - 150; 
    const y = Math.floor(Math.random() * 300) - 150; 
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
