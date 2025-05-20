let homeCountEl = document.getElementById("homeCount-El")
let guestCountEl = document.getElementById("guestCount-El")

console.log(homeCountEl)

let homeCount = 0
let guestCount = 0

function threeHome() {
     homeCount += 3
    homeCountEl.innerText = homeCount
} 


function sixHome() {
    homeCount += 6
    homeCountEl.innerText = homeCount
} 


function nineHome() {
    homeCount += 9
    homeCountEl.innerText = homeCount
} 

function threeGuest() {
     guestCount += 3
    guestCountEl.innerText = guestCount
} 


function sixGuest() {
   guestCount += 6
    guestCountEl.innerText = guestCount
} 


function nineGuest() {
    guestCount += 9
    guestCountEl.innerText = guestCount
} 



