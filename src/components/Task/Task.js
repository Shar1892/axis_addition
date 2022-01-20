import {useState} from 'react';

import './Task.css';

function Task({
	firstTerm,
	secondTerm,
	result,
	isFirstTermRight,
	isSecondTermRight,
	isAnswerInputVisible,
	isAnswerRight,
	viewResult,
	changeAnswerRight,
	changeResultVisible,
}) {
	const [answer, serAnswer] = useState('');

	const handleChangAnswer = (evt) => {
		let currentValue = +evt.target.value;
		serAnswer(currentValue);
		if (currentValue === firstTerm + secondTerm) {
			viewResult(currentValue);
			changeResultVisible(false);
			changeAnswerRight(true);
		} else {
			changeAnswerRight(false);
		}
	};

	return (
		<div className='task'>
			<p className={`task__term ${isFirstTermRight ? '' : 'task__term_wrong'}`}>
				{firstTerm}
			</p>
			<p className='task__sign'>+</p>
			<p
				className={`task__term ${isSecondTermRight ? '' : 'task__term_wrong'}`}
			>
				{secondTerm}
			</p>
			<p className='task__sign'>=</p>
			<p
				className={`task__result ${
					isAnswerInputVisible ? 'task__result_invisible' : ''
				}`}
			>
				{result}
			</p>
			<input
				className={`task__answer-input ${
					isAnswerInputVisible ? 'task__answer-inpu_visible_visible' : ''
				} ${isAnswerRight ? '' : 'task__answer-input_rigth_wrong'}`}
				type='text'
				value={answer || ''}
				onChange={handleChangAnswer}
			></input>
		</div>
	);
}

export default Task;

// <div className={`task ${isVisible ? 'task_visible' : ''}`}>
