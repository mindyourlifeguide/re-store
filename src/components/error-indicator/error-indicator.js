import React from 'react';
import classes from './error-indicator.module.scss';

const ErrorIndicator = () => {
	function refreshPage() {
		window.location.reload();
	}
	return (
		<>
			<div className={classes.spinner}>
				<div className={classes.spinnerCircleOuter} />

				<div className={classes.spinnerCircleSingle1} />
				<div className={classes.spinnerCircleSingle2} />
			</div>
			<div className={classes.errorIndicator}>
				Oops ... Something went wrong
			</div>
			<div className={classes.text} onClick={refreshPage}>
				Please reload your page
			</div>
		</>
	);
};

export default ErrorIndicator;
