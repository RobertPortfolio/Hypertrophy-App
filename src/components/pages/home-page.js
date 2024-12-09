import React from 'react';
import { translate } from '../translations';
import { useSelector } from 'react-redux';

const HomePage = () => {
 
  	const lang = useSelector(state => state.language.lang);
  	const user = useSelector(state => state.auth.user);

	return (
		<div>{user ? user.username : translate('homepage', lang)}</div>
	)
};

export default HomePage;