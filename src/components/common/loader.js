import React from 'react';
import loader from '../../../public/image/loader.gif';

const Loader = () => {
	return(
		<div className="loader">
			<img src={loader} alt="loader" />
		</div>
		);
}

export default Loader;
