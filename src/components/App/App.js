import {useState, useEffect} from 'react';

import './App.css';
import Axis from '../Axis/Axis';
import Task from '../Task/Task';
import {randomNumber} from '../../utils/utils';

function App() {
	const [firstTerm, setFirstTerm] = useState(0);
	const [secondTerm, setSecondTerm] = useState(0);
	const [result, setResult] = useState('?');

	const [isSecondArrowVisible, setIsSecondArrowVisible] = useState(false);

	const [isFirstTermInputVisible, setIsFirstTermInputVisible] = useState(true);
	const [isSecondTermInputVisible, setIsSecondTermInputVisible] =
		useState(true);

	const [isFirstTermRight, setIsFirstTermRight] = useState(true);
	const [isSecondTermRight, setIsSecondTermRight] = useState(true);

	const [isAnswerInputVisible, setIsAnswerInputVisible] = useState(false);

	const [isAnswerRight, setIsAnswerRight] = useState(true);

	useEffect(() => {
		let first = randomNumber(6, 9);
		let second = randomNumber(11 - first, 14 - first);
		setFirstTerm(first);
		setSecondTerm(second);
	}, []);

	const moveToNextTerm = () => {
		setIsFirstTermInputVisible(false);
		setIsSecondArrowVisible(true);
	};

	const changeFirstTermRight = (bool) => {
		setIsFirstTermRight(bool);
	};

	const changeSecondTermRight = (bool) => {
		setIsSecondTermRight(bool);
	};

	const moveToResult = () => {
		setIsSecondTermInputVisible(false);
		setIsAnswerInputVisible(true);
	};

	const changeAnswerRight = (bool) => {
		setIsAnswerRight(bool);
	};

	const changeResultVisible = (bool) => {
		setIsAnswerInputVisible(bool);
	};

	const viewResult = (res) => {
		setResult(res);
	};

	return (
		<div className='app'>
			<Task
				firstTerm={firstTerm}
				secondTerm={secondTerm}
				result={result}
				isFirstTermRight={isFirstTermRight}
				isSecondTermRight={isSecondTermRight}
				isAnswerInputVisible={isAnswerInputVisible}
				isAnswerRight={isAnswerRight}
				viewResult={viewResult}
				changeAnswerRight={changeAnswerRight}
				changeResultVisible={changeResultVisible}
			/>
			<Axis
				firstTerm={firstTerm}
				secondTerm={secondTerm}
				isSecondArrowVisible={isSecondArrowVisible}
				isFirstTermInputVisible={isFirstTermInputVisible}
				isSecondTermInputVisible={isSecondTermInputVisible}
				isFirstTermRight={isFirstTermRight}
				isSecondTermRight={isSecondTermRight}
				moveToNextTerm={moveToNextTerm}
				moveToResult={moveToResult}
				changeFirstTermRight={changeFirstTermRight}
				changeSecondTermRight={changeSecondTermRight}
			/>
		</div>
	);
}

export default App;
