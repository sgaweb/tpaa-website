(function () {
	// Mobile nav toggle
	var toggle = document.querySelector('.nav-toggle');
	var nav = document.getElementById('primary-nav');
	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
	}

	// Quiz
	var quiz = document.getElementById('tpaa-quiz');
	if (!quiz) return;
	var questions = quiz.querySelectorAll('.quiz-q');
	var answered = 0, correct = 0;
	var result = quiz.querySelector('.quiz-result');

	questions.forEach(function (q) {
		q.addEventListener('change', function (e) {
			if (q.classList.contains('answered')) return;
			var input = e.target;
			if (input.type !== 'radio') return;
			q.classList.add('answered');
			var isRight = input.value === q.dataset.answer;
			q.classList.add(isRight ? 'correct' : 'incorrect');
			var fb = q.querySelector('.quiz-feedback');
			if (fb) {
				fb.textContent = (isRight ? '✓ Correct. ' : '✕ Not quite. ') + (q.dataset.explain || '');
				fb.style.color = isRight ? '#00843d' : '#b3361d';
			}
			q.querySelectorAll('input').forEach(function (i) { i.disabled = true; });
			answered++;
			if (isRight) correct++;
			if (answered === questions.length && result) {
				result.style.display = 'block';
				result.querySelector('strong').textContent = correct + ' / ' + questions.length;
				result.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		});
	});
})();
