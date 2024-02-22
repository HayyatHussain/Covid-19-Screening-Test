// Get The DOM Elements
const q1 = $(".q-1"),
  q2 = $(".q-2"),
  q3 = $(".q-3"),
  q4 = $(".q-4"),
  q5 = $(".q-5"),
  q6 = $(".q-6"),
  q7 = $(".q-7"),
  q8 = $(".q-8"),
  q9 = $(".q-9"),
  q10 = $(".q-10"),
  btnNodeList = $(".btn-func"),
  arrayOfQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  result1 = $(".result-1"),
  result2 = $(".result-2"),
  result3 = $(".result-3"),

  resultArray = [result1, result2, result3];

resultArray.forEach(result => result.hide());

const outputHandling = () => {
  if (q1.attr('value') === 'true' && q2.attr('value') === 'true' && q4.attr('value') === 'true' && q6.attr('value') === 'true' && q8.attr('value') === 'true' && q9.attr('value') === 'true') {
    return true;
  } else if (q1.attr('value') === 'true' && q2.attr('value') === 'true' && q4.attr('value') === 'true') {
    return null;
  } else {
    return false;
  }
};


const screening = (array, list, value) => {
  // Hide all questions except the first one
  array.forEach((question, i) => {
    question.hide();
  });
  array[0].show();
  // Increment value on click

  list.click(function() {
    value += 1;
    const clickedBtn = $(this);
    const question = clickedBtn.closest('.row');
    if (clickedBtn.val() === 'true') {
      question.attr('value', 'true');
    } else if (clickedBtn.val() === 'false') {
      question.attr('value', 'false');
    }

    array.forEach((question, i) => {
      question.hide();
      if (i === value) {
        question.show();
      }
    });

    // Output Handling
    if (value > 9 && outputHandling()) {
      resultArray[0].show();
    } else if (value > 9 && outputHandling() === null) {
      resultArray[1].show();
    } else if (value > 9 && !outputHandling()) {
      resultArray[2].show();
    }
  });

};

screening(arrayOfQuestions, btnNodeList, 0);
