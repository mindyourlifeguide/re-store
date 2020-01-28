import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerRotateOuter = keyframes`
  0% {
		transform: rotateZ(0deg);
		}
	100% {
		transform: rotateZ(360deg);
		}
`;
const SpinnerRotateSingle1 = keyframes`
  0% {
		transform: rotateZ(56deg);
		}

	20% {
		transform: rotateZ(-132deg);
		}

	40% {
		transform: rotateZ(-250deg);
		}

	60% {
		transform: rotateZ(40deg);
		}

	70% {
		transform: rotateZ(-80deg);
		}

	100% {
		transform: rotateZ(56deg);
		}
`;
const SpinnerRotateSingle2 = keyframes`
  0% {
		transform: rotateZ(-24deg);
		}

	10% {
		transform: rotateZ(142deg);
		}

	20% {
		transform: rotateZ(-87deg);
		}

	30% {
		transform: rotateZ(-345deg);
		}

	40% {
		transform: rotateZ(86deg);
		}

	50% {
		transform: rotateZ(175deg);
		}

	60% {
		transform: rotateZ(-245deg);
		}

	70% {
		transform: rotateZ(4deg);
		}

	80% {
		transform: rotateZ(-132deg);
		}

	90% {
		transform: rotateZ(345deg);
		}

	100% {
		transform: rotateZ(-24deg);
		}
`;
const Spinner = styled('div')`
	display: grid;
	grid-area: Spinner;
	justify-content: center;
	text-align: center;
	width: 55px;
	height: 55px;
	position: relative;
	margin-top: 25px;
	line-height: 100%;
`;
const SpinnerCircle = styled(Spinner)`
	position: absolute;
	background-color: transparent;
	border-radius: 50%;
	border-style: solid;
	border-color: #282c34 transparent #282c34 transparent;
`;
const SpinnerCircleOuter = styled(SpinnerCircle)`
	width: 51.2px;
	height: 51.2px;
	border-width: 12.8px;
	top: -6px;
	left: -6px;
	opacity: 0.2;
	filter: alpha(opacity = 50);
	animation: ${SpinnerRotateOuter} 2s 0s ease-in-out infinite;
`;
const SpinnerCircleSingle1 = styled(SpinnerCircle)`
	width: 38.4px;
	height: 38.4px;
	border-width: 9.6px;
	top: 3px;
	left: 3px;
	opacity: 0.9;
	filter: alpha(opacity = 30);
	animation: ${SpinnerRotateSingle1}5s 0s ease-in-out infinite;
	border-color: transparent transparent transparent #17a2b8;
	box-shadow: 2px 0 2px #17a2b8;
`;
const SpinnerCircleSingle2 = styled(SpinnerCircle)`
	width: 0;
	height: 0;
	border-width: 25.6px;
	top: 6px;
	left: 6px;
	opacity: 0;
	filter: alpha(opacity = 30);
	animation: ${SpinnerRotateSingle2} 7s 0s ease-in-out infinite;
	border-color: #17a2b8 transparent transparent transparent;
	box-shadow: 0 -12px 4px #17a2b8;
`;
const ErrorIndicatorText = styled('div')`
	display: flex;
	justify-content: center;
`;
const ErrorIndicatorReload = styled(ErrorIndicatorText)`
	color: #17a2b8;
`;

const ErrorIndicator = () => {
	function refreshPage() {
		window.location.reload();
	}
	return (
		<>
			<Spinner>
				<SpinnerCircleOuter />
				<SpinnerCircleSingle1 />
				<SpinnerCircleSingle2 />
			</Spinner>
			<ErrorIndicatorText>Oops ... Something went wrong</ErrorIndicatorText>
			<ErrorIndicatorReload onClick={refreshPage}>
				Please reload your page
			</ErrorIndicatorReload>
		</>
	);
};

export default ErrorIndicator;
