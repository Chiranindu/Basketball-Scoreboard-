let homecount = 0
let guestcount = 0
let homePts = document.getElementById('home-pts')
let guestPts = document.getElementById('guest-pts')

function homeaddone(){
    homecount = homecount + 1
    homePts.textContent = homecount
}

function homeaddtwo(){
    homecount = homecount + 2
   homePts.textContent = homecount
}

function homeaddthree(){
    homecount = homecount + 3
    homePts.textContent = homecount
}

function guestaddone(){
    guestcount = guestcount + 1
    guestPts.textContent = guestcount
}

function guestaddtwo(){
    guestcount = guestcount + 2
    guestPts.textContent = guestcount
}

function guestaddthree(){
    guestcount = guestcount + 3
    guestPts.textContent = guestcount
}