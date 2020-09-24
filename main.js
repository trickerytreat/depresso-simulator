var clicks = 0

function increaseClicks(){
clicks += 1
document.getElementById("clicks").textContent = `chance of comitting suicide: ${clicks}`
}
function decreaseClicks(){
clicks -= 1
document.getElementById("clicks").textContent = `chance of comitting suicide: ${clicks}`
}
function deleteClicks(){
clicks = 0
document.getElementById("clicks").textContent = `chance of comitting suicide: ${clicks}`
}
function addlotofclicks(){
clicks = 0
document.getElementById("clicks").textContent = `chance of comitting suicide: ${clicks}`
}