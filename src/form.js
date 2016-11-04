var hasLength = function (field, val) {
  if (!val.length) {
    return field + " shoud not be blank :)"
  }
}

var onlyLetters = function (field, val) {
  if (!/^[a-zA-Z\s]*$/g.test(val)) {
    return "Please only use letters for the "+field+" :)"
  }
}

var addError = function (err) {
  var span = "<span>"+err+"</span>"
  $(".errors").append(span)
}

var fieldsData = {
  name: {
    validations: [hasLength, onlyLetters],
    label: "Name"
  },
  guest: {
    validations: [onlyLetters],
    label: "Guest Name"
  }
}

$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    var data = {
      name: $("#name").val(),
      guest: $("#guest-name").val(),
      attending: $("input[name=attending]:checked").val() ? "yes" : "no",
      respond_date: new Date()
    }

    var errors = []
    for (var key in fieldsData) {
      var val = data[key]
      var label = fieldsData[key].label
      var validations = fieldsData[key].validations
      errors = errors.concat(validations.map(function (fn) {
        return fn(label, val)
      }))
    }

    errors = errors.filter(function (err) { return err })

    $(".errors").html("")
    if (errors.length) {
      errors.forEach(addError)
      return
    }

    $("button").text("Responding...").attr({disabled: true})
    
    $.ajax({
      url: 'https://sheetsu.com/apis/v1.0/81be72846263',
      data: data,
      dataType: 'json',
      type: 'POST',
      success: function(data) {
        $("button").text("Respond").attr({disabled: false})

        $("#name").val("")
        $("#guest-name").val("")
        $("#success").show()
      },
      error: function(data) {
        console.log("error: ", data);
        addError("Sorry, there was an error. Please email jvnlwn@gmail.com with the error info. Error: " + data.responseJSON.error)
      }
    });
  })
})