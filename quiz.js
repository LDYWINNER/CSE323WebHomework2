// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$(document).ready(function () {
  var country_capital_pairs = pairs;
  var input = document.getElementById('quiz-answer');
  var chosenPair = country_capital_pairs[Math.floor(Math.random() * pairs.length)];
  $("#quiz-question").text(chosenPair.country);


  $("#quiz-submit").click(function () {
    var tr_record = document.createElement("tr");
    var td_first = document.createElement("td");
    var text = document.getElementById('quiz-question').innerText;
    td_first.innerText = text;


    var td_second = document.createElement("td");
    td_second.innerText = input.value;

    var td_third = document.createElement("td");
    var targetPairs = country_capital_pairs.filter(obj => {
      return obj.country === text
    })
    if (input.value === targetPairs[0].capital) {
      td_third.innerHTML = '<i class="fas fa-check"></i>';
      tr_record.classList.add("correct");
    } else {
      td_third.innerHTML = '<i class="far fa-times"></i>';
      tr_record.classList.add("incorrect");
      td_second.classList.add("strikethrough");
    }

    var delete_button = document.createElement("button");
    delete_button.innerText = "delete";
    td_third.append(delete_button);

    tr_record.append(td_first, td_second, td_third);

    $("#first-tr").after(tr_record);

    var newPair = country_capital_pairs[Math.floor(Math.random() * pairs.length)];
    $("#quiz-question").text(newPair.country);
    $("#quiz-answer").val('');
    $("#quiz-answer").focus();
  });

  $("i + button").click(function () {
    $(this).parent().parent().remove();
  });

  $("input[type='radio']").click(function () {
    var temp = $("input[type='radio'][name='filter']:checked").val();
    console.log(temp);
    if (temp === "Correct Only") {
      $(".incorrect").hide();
      $(".correct").show();
    } else if (temp === "Wrong Only") {
      $(".correct").hide();
      $(".incorrect").show();
    } else {
      $(".correct").show();
      $(".incorrect").show();
    }
  });

});





