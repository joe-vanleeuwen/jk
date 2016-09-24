// Do I care about document ready?

var countdown = function () {
  var now = new Date()
  var then = new Date(2016, 11, 31)
  var tillThen = (then.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) // 86400000 - milliseconds per day
  return Math.ceil(tillThen)
}

document.getElementById("countdown").innerHTML = countdown()