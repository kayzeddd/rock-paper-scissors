const playerBtn = document.querySelectorAll(".playerBtn")



playerBtn.forEach(btn => btn.addEventListener("click", playRound))

function playRound(e) {
    console.log(e);
}