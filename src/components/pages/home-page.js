import React from 'react';
import { translate } from '../translations';
import { useSelector } from 'react-redux';

const HomePage = () => {
 
  	const lang = useSelector(state => state.language.lang);

	return (
		<div>{translate('homepage', lang)}</div>
	)
};

export default HomePage;