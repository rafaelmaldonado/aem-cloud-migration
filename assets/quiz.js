// Reusable quiz widget. Markup:
//   <div class="quiz" data-answer="1">
//     <div class="q">Question?</div>
//     <button>Option A</button><button>Option B</button>...
//     <div class="feedback"></div>
//   </div>
// data-answer is the 0-based index of the correct button.
// Optional data-explain-N attributes give per-option feedback.
// Multiple-response variant (exam "select TWO" format):
//   <div class="quiz" data-answers="0,2">
//     ... buttons ...
//     <button class="check">Check answer</button>
//     <div class="feedback"></div>
//   </div>
document.querySelectorAll('.quiz').forEach(function (quiz) {
  var feedback = quiz.querySelector('.feedback');

  if (quiz.dataset.answers != null) {          // multiple-response
    var correct = quiz.dataset.answers.split(',').map(function (n) { return parseInt(n, 10); });
    var opts = quiz.querySelectorAll('button:not(.check)');
    var check = quiz.querySelector('button.check');
    opts.forEach(function (btn, i) {
      btn.addEventListener('click', function () { btn.classList.toggle('sel'); });
    });
    check.addEventListener('click', function () {
      var ok = true;
      opts.forEach(function (btn, i) {
        var picked = btn.classList.contains('sel');
        var isRight = correct.indexOf(i) !== -1;
        btn.classList.remove('correct', 'wrong', 'sel');
        if (isRight) btn.classList.add('correct');
        if (picked && !isRight) { btn.classList.add('wrong'); ok = false; }
        if (!picked && isRight) ok = false;
      });
      feedback.textContent = ok ? (quiz.dataset.explain || 'Correct — all right answers, no wrong ones.')
                                : (quiz.dataset.explain || 'Not quite — highlighted options are the correct set.');
    });
    return;
  }

  var answer = parseInt(quiz.dataset.answer, 10);   // single-response
  var buttons = quiz.querySelectorAll('button');
  buttons.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('correct', 'wrong'); });
      var explain = quiz.dataset['explain' + i];
      if (i === answer) {
        btn.classList.add('correct');
        feedback.textContent = explain || 'Correct.';
      } else {
        btn.classList.add('wrong');
        buttons[answer].classList.add('correct');
        feedback.textContent = explain || 'Not quite — the highlighted option is correct.';
      }
    });
  });
});
