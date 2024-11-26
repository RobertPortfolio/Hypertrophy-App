import React, { useState } from 'react';
import CalorieCalcForm from './calorie-calc-form';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setFormData } from '../../actions';

const CalorieCalcFormContainer = ({ formData, setFormData }) => {
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	const handleChange = (e) => {
    	const { name, value } = e.target;
	    setFormData(name, value);
	};

	const handleSubmit = (e) => {
	    e.preventDefault();
	    const newErrors = {};
	    Object.keys(formData).forEach((key) => {
	      if (!formData[key].trim()) {
	        newErrors[key] = `${key}FieldIsRequired`;
	      }
	    });

	    if (Object.keys(newErrors).length > 0) {
	      setErrors(newErrors);
	      return;
	    }
	    setErrors({});
	    console.log('Форма успешно отправлена:', formData);
	    navigate('/calorie-calc/results');
	};

	return(
		<CalorieCalcForm
	        formData={formData}
	        errors={errors} 
	        handleChange={handleChange}
	        handleSubmit={handleSubmit} />
	)
};

const mapStateToProps = ({ formData }) => {
	return { formData };
}

const mapDispatchToProps = (dispatch) => {
	return{
		setFormData: (name, value) => dispatch(setFormData(name, value))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CalorieCalcFormContainer);