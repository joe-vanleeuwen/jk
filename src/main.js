// Do I care about document ready?

var second = 1000
var minute = second * 60
var hour = minute * 60
var day = hour * 24 // 86400000 - milliseconds per day
var daysElement = "days"//"countdown"

var countdown = function () {
  var now = new Date()
  var then = (new Date(2016, 11, 31)).getTime()
  var days = 0
  while (
    then != (new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + days
    )).getTime()
  ) {
    days ++
  }
  return days
}

var updateCountDown = function () {
  document.getElementById(daysElement).innerHTML = countdown()
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
  }, Math.min(timeTill, hour))
}

updateCountDown()
monitorCountDown()