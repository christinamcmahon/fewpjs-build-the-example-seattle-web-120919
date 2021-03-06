// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  likeableHearts()
})

function likeableHearts() {
  mimicServerCall()
  document.querySelectorAll('li span').forEach(function (item) {
    item.addEventListener("click", function () {
      if (item.innerHTML == FULL_HEART) {
        item.innerHTML = EMPTY_HEART
      } else {
        item.innerHTML = FULL_HEART
      }

    })
  })

}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
