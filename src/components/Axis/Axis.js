import {useState} from 'react';

import './Axis.css';

function Axis({
	firstTerm,
	secondTerm,
	isSecondArrowVisible,
	isFirstTermInputVisible,
	isSecondTermInputVisible,
	isFirstTermRight,
	isSecondTermRight,
	moveToNextTerm,
	moveToResult,
	changeFirstTermRight,
	changeSecondTermRight,
}) {
	const [firstTermValue, setFirstTermValue] = useState('');
	const [secondTermValue, setSecondTermValue] = useState('');

	const handleChangFirstTermValue = (evt) => {
		let currentValue = +evt.target.value;
		setFirstTermValue(currentValue);
		if (currentValue === firstTerm) {
			changeFirstTermRight(true);
			moveToNextTerm();
		} else {
			changeFirstTermRight(false);
		}
	};

	const handleChangSecondTermValue = (evt) => {
		let currentValue = +evt.target.value;
		setSecondTermValue(currentValue);
		if (currentValue === secondTerm) {
			changeSecondTermRight(true);
			moveToResult();
		} else {
			changeSecondTermRight(false);
		}
	};

	return (
		<div className='axis'>
			<div className='axis__arrow-container axis__arrow-container_visible axis__arrow-container_position_1'>
				<input
					className={`axis__input ${
						isFirstTermInputVisible ? '' : 'axis__input_visibility_invisible'
					} ${isFirstTermRight ? '' : 'axis__input_right_wrong'}`}
					type='text'
					value={firstTermValue || ''}
					onChange={handleChangFirstTermValue}
				></input>
				<p
					className={`axis__rightTerm ${
						isFirstTermInputVisible ? '' : 'axis__rightTerm_visible'
					}`}
				>
					{firstTerm}
				</p>
				<div className={`axis__arrow axis__arrow_size_${firstTerm}`}></div>
			</div>
			<div
				className={`axis__arrow-container axis__arrow-container_position_${firstTerm} ${
					isSecondArrowVisible ? 'axis__arrow-container_visible' : ''
				}`}
			>
				<input
					className={`axis__input ${
						isSecondTermInputVisible ? '' : 'axis__input_visibility_invisible'
					} ${isSecondTermRight ? '' : 'axis__input_right_wrong'}`}
					type='text'
					value={secondTermValue || ''}
					onChange={handleChangSecondTermValue}
				></input>
				<p
					className={`axis__rightTerm ${
						isSecondTermInputVisible ? '' : 'axis__rightTerm_visible'
					}`}
				>
					{secondTerm}
				</p>
				<div className={`axis__arrow axis__arrow_size_${secondTerm}`}></div>
			</div>
			<div className='axis__main'></div>
		</div>
	);
}

export default Axis;
