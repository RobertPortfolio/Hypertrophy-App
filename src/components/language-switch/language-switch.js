import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions';


const LanguageSwitch = ({ lang, setLanguage }) => {
	return (
		<div className="btn-group" role="group" aria-label="Basic outlined example">
		  <button 
		  	type="button" 
		  	className={lang==='en'?'btn btn-light':'btn btn-outline-light'}
		  	onClick={()=>setLanguage('en')}>
		  	en
		  </button>
		  <button 
		  	type="button" 
		  	className={lang==='ua'?'btn btn-light':'btn btn-outline-light'}
		  	onClick={()=>setLanguage('ua')}>
		  	ua
		  </button>
		</div>
	)
};

const mapStateToProps = ({ language: { lang }}) => {
	return { lang };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setLanguage: (language) => dispatch(setLanguage(language))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitch);