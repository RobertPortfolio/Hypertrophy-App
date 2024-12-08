import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import { translate } from '../translations';
import { LabelInputFormItem, LabelRadioInputFormItem } from './label-input-form-item';
import BodyFatPhoto from '../../assets/body-fat-percentage-men-women.png';

const CalorieCalcForm = ({ formData, errors, handleChange, handleSubmit }) => {

	const [showPhoto, setShowPhoto] = useState(false);

	const togglePhoto = () => setShowPhoto(prevState => !prevState);

	const lang = useSelector(state => state.language.lang);

	return (
		<div className="container p-3">
		<div className="row justify-content-center">
		<div className="col-12 col-md-6">
	      <form onSubmit={handleSubmit}>

	        <LabelRadioInputFormItem 
	        	name="goal"
	        	labelText={translate('chooseGoal', lang)}
	        	errorText={translate(errors.goal, lang)}
	        	isError={errors.goal && !formData.goal}
	        	handleChange={handleChange}
	        	formDataOption={formData.goal}
	        	optionsList={[
		        	{
		        		id: 'goalCut',
		        		value: 'cut',
		        		text: translate('cut', lang)
		        	},
		        	{
		        		id: 'goalMaintain',
		        		value: 'maintain',
		        		text: translate('maintain', lang)
		        	},
		        	{
		        		id: 'goalBulk',
		        		value: 'bulk',
		        		text: translate('bulk', lang)
		        	},
	        	]}
	        	
	        />

	        <LabelInputFormItem 
	        	id="weightInput"
	        	name="weight"
	        	value={formData.weight}
	        	handleChange={handleChange}
	        	labelText={translate('inputWeight', lang)}
	        	errorText={translate(errors.weight, lang)}
	        	isError={errors.weight && !formData.weight}
	        />
	        
	        <LabelInputFormItem 
	        	id="fatPercentageInput"
	        	name="fatPercentage"
	        	value={formData.fatPercentage}
	        	handleChange={handleChange}
	        	labelText={translate('inputFatPercentage', lang)}
	        	errorText={translate(errors.fatPercentage, lang)}
	        	isError={errors.fatPercentage && !formData.fatPercentage}
	        />

	        <div className="row mb-3">
	        	<div className="col-6">{translate('usePhoto', lang)}</div>
	        	<div className="col-6">
			        <button 
			          	type="button"
			          	className="btn btn-outline-light"
			          	onClick={togglePhoto}>
					  	{showPhoto ? translate('hidePhoto', lang) : translate('showPhoto', lang)}
					</button>
				</div>

			   	  {/* Условное отображение фото */}
			   	  <Collapse in={showPhoto}>
			   	  	<div>
			   	  		<img 
			   	  			src={BodyFatPhoto} 
			   	  			alt="Fat Percentage"
	            			className="img-fluid mt-3" />
			   	  	</div>
			   	  </Collapse>
		   	</div>

	        <LabelInputFormItem 
	        	id="heightInput"
	        	name="height"
	        	value={formData.height}
	        	handleChange={handleChange}
	        	labelText={translate('inputHeight', lang)}
	        	errorText={translate(errors.height, lang)}
	        	isError={errors.height && !formData.height}
	        />

	        <LabelInputFormItem 
	        	id="ageInput"
	        	name="age"
	        	value={formData.age}
	        	handleChange={handleChange}
	        	labelText={translate('inputAge', lang)}
	        	errorText={translate(errors.age, lang)}
	        	isError={errors.age && !formData.age}
	        />

	        <LabelRadioInputFormItem 
	        	name="gender"
	        	labelText={translate('chooseGender', lang)}
	        	errorText={translate(errors.gender, lang)}
	        	isError={errors.gender && !formData.gender}
	        	handleChange={handleChange}
	        	formDataOption={formData.gender}
	        	optionsList={[
		        	{
		        		id: 'genderFemale',
		        		value: 'female',
		        		text: translate('female', lang)
		        	},
		        	{
		        		id: 'genderMale',
		        		value: 'male',
		        		text: translate('male', lang)
		        	}
	        	]}	
	        />

	        <LabelRadioInputFormItem 
	        	name="activity"
	        	labelText={translate('chooseActivity', lang)}
	        	errorText={translate(errors.activity, lang)}
	        	isError={errors.activity && !formData.activity}
	        	handleChange={handleChange}
	        	formDataOption={formData.activity}
	        	optionsList={[
		        	{
		        		id: 'activityLow',
		        		value: 'sedentary',
		        		text: translate('sedentary', lang)
		        	},
		        	{
		        		id: 'activityModerate',
		        		value: 'moderate',
		        		text: translate('moderate', lang)
		        	},
		        	{
		        		id: 'activityMedium',
		        		value: 'medium',
		        		text: translate('medium', lang)
		        	},
		        	{
		        		id: 'activityHigh',
		        		value: 'high',
		        		text: translate('high', lang)
		        	},
		        	{
		        		id: 'activityVeryHigh',
		        		value: 'veryHigh',
		        		text: translate('veryHigh', lang)
		        	}
	        	]}	
	        />

	        <div className="mb-3 text-center">
	          <button type="submit" className="btn btn-primary">
	            Рассчитать
	          </button>
	        </div>
	      </form>
	      </div>
	      </div>
	    </div>
	)
};

export default CalorieCalcForm;