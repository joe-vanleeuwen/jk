$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    var data = {
      name: $("#name").val(),
      guest: $("#guest-name").val(),
      attending: document.getElementById("attending").checked ? "yes" : "no"
    }

    $.ajax({
      url: 'https://sheetsu.com/apis/v1.0/81be72846263',
      data: data,
      dataType: 'json',
      type: 'POST',
      success: function(data) {
        console.log("succeeded");
      },
      error: function(data) {
        console.log("error: ", data);
      }
    });
  })
})