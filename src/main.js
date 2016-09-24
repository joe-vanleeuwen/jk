// Do I care about document ready?

var countdown = function () {
  var now = new Date()
  var then = new Date(2016, 11, 31)
  var tillThen = (then.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) // 86400000 - milliseconds per day
  return Math.ceil(tillThen)
}

var updateCountDown = function () {
  document.getElementById("countdown").innerHTML = countdown()
}

var monitorCountDown = function () {
  var date = new Date()
  var midnight = (new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  ))
  var timeTill = midnight.getTime() - date.getTime()
  setTimeout(function () {
    updateCountDown()
    monitorCountDown()
  }, Math.min(timeTill, 3600000)) // an hour
}

updateCountDown()
monitorCountDown()