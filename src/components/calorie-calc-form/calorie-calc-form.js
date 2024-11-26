import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import { translate } from '../translations';
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
	        <div className="my-3 row">
	          <label className="form-label w-25">{translate('chooseGoal', lang)}</label>
	          <div className="col">
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="goal" 
	                id="goalCut" 
	                value="cut"
	                onChange={handleChange} 
	                checked={"cut"===formData.goal}
	              />
	              <label className="form-check-label" htmlFor="goalCut">
	                {translate('cut', lang)}
	              </label>
	            </div>
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="goal" 
	                id="goalMaintain"
	                value="maintain"
	                onChange={handleChange} 
	                checked={"maintain"===formData.goal}
	              />
	              <label className="form-check-label" htmlFor="goalMaintain">
	                {translate('maintain', lang)}
	              </label>
	            </div>
	            <div className="form-check">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="goal" 
	                id="goalBulk"
	                value="bulk"
	                onChange={handleChange} 
	                checked={"bulk"===formData.goal}
	              />
	              <label className="form-check-label" htmlFor="goalBulk">
	                {translate('bulk', lang)}
	              </label>
	            </div>
	            {errors.goal && !formData.goal && (
	              <div className="text-danger">{translate(errors.goal, lang)}</div> // Показываем текст ошибки, если не выбрана цель
	            )}
	          </div>
	        </div>
	        <div className="mb-3 row">
	          <label htmlFor="weightInput" className="form-label col-auto">{translate('inputWeight', lang)}</label>
	          <input 
	            type="number" 
	            className={`form-control col ${errors.weight && !formData.weight ? "is-invalid" : ""}`} 
	            name="weight" 
	            id="weightInput"
	            value={formData.weight}
	            onChange={handleChange} 
	          />
	           {errors.weight && !formData.weight && (
	              <div className="text-danger">{translate(errors.weight, lang)}</div> // Ошибка для пола
	            )} {/* Ошибка для веса */}
	        </div>
	        <div className="mb-3 row">
	          <label htmlFor="fatPercentageInput" className="form-label col-auto">{translate('inputFatPercentage', lang)}</label>
	          <input 
	            type="number" 
	            className={`form-control col ${errors.fatPercentage && !formData.fatPercentage ? "is-invalid" : ""}`} 
	            name="fatPercentage" 
	            id="fatPercentageInput"
	            value={formData.fatPercentage}
	            onChange={handleChange} 
	          />
	           {errors.fatPercentage && !formData.fatPercentage && (
	              <div className="text-danger">{translate(errors.fatPercentage, lang)}</div> // Ошибка для пола
	            )} {/* Ошибка для веса */}
	        </div>
	        
	        <div className="row mb-3">
	        	<div className="col-auto">{translate('usePhoto', lang)}</div>
		        <button 
		          	type="button" 
		          	className="btn btn-outline-light col"
		          	onClick={togglePhoto}>
				  	{showPhoto ? translate('hidePhoto', lang) : translate('showPhoto', lang)}
				</button>

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
	        <div className="mb-3 row">
	          <label htmlFor="heightInput" className="form-label col-auto">{translate('inputHeight', lang)}</label>
	          <input 
	            type="number" 
	            className={`form-control col ${errors.height && !formData.height ? "is-invalid" : ""}`}
	            name="height" 
	            id="heightInput" 
	            value={formData.height}
	            onChange={handleChange} 
	          />
	           {errors.height && !formData.height && (
	              <div className="text-danger">{translate(errors.height, lang)}</div> // Ошибка для пола
	            )} {/* Ошибка для роста */}
	        </div>
	        <div className="mb-3 row">
	          <label htmlFor="ageInput" className="form-label col-auto">{translate('inputAge', lang)}</label>
	          <input 
	            type="number" 
	            className={`form-control col ${errors.age && !formData.age ? "is-invalid" : ""}`}
	            name="age" 
	            id="ageInput" 
	            value={formData.age}
	            onChange={handleChange} 
	          />
	            {errors.age && !formData.age && (
	              <div className="text-danger">{translate(errors.age, lang)}</div> // Ошибка для пола
	            )}
	        </div>
	        <div className="mb-3 row">
	          <label className="form-label w-25">{translate('chooseGender', lang)}</label>
	          <div className="col">
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                value="female" 
	                name="gender" 
	                id="genderFemale" 
	                onChange={handleChange} 
	                checked={"female"===formData.gender}
	              />
	              <label className="form-check-label" htmlFor="genderFemale">
	                {translate('female', lang)}
	              </label>
	            </div>
	            <div className="form-check">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                value="male" 
	                name="gender" 
	                id="genderMale" 
	                onChange={handleChange} 
	                checked={"male"===formData.gender}
	              />
	              <label className="form-check-label" htmlFor="genderMale">
	                {translate('male', lang)}
	              </label>
	            </div>
	            {errors.gender && !formData.gender && (
	              <div className="text-danger">{translate(errors.gender, lang)}</div> // Ошибка для пола
	            )}
	          </div>
	        </div>
	        <div className="mb-3 row">
	          <label className="form-label w-25">{translate('chooseActivity', lang)}</label>
	          <div className="col">
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                value="sedentary" 
	                name="activity" 
	                id="activityLow" 
	                onChange={handleChange} 
	                checked={"sedentary"===formData.activity}
	              />
	              <label className="form-check-label" htmlFor="activityLow">
	                {translate('sedentary', lang)}
	              </label>
	            </div>
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="activity" 
	                id="activityModerate" 
	                value="moderate"
	                onChange={handleChange}
	                checked={"moderate"===formData.activity} 
	              />
	              <label className="form-check-label" htmlFor="activityModerate">
	                {translate('moderate', lang)}
	              </label>
	            </div>
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="activity" 
	                id="activityMedium"
	                value="medium"
	                onChange={handleChange} 
	                checked={"medium"===formData.activity}
	              />
	              <label className="form-check-label" htmlFor="activityMedium">
	                {translate('medium', lang)}
	              </label>
	            </div>
	            <div className="form-check mb-1">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="activity" 
	                id="activityHigh"
	                value="high"
	                onChange={handleChange} 
	                checked={"high"===formData.activity}
	              />
	              <label className="form-check-label" htmlFor="activityHigh">
	                {translate('high', lang)}
	              </label>
	            </div>
	            <div className="form-check">
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name="activity" 
	                id="activityVeryHigh"
	                value="veryHigh"
	                onChange={handleChange} 
	                checked={"veryHigh"===formData.activity}
	              />
	              <label className="form-check-label" htmlFor="activityVeryHigh">
	                {translate('veryHigh', lang)}
	              </label>
	            </div>
	            {errors.activity && !formData.activity && (
	              <div className="text-danger">{translate(errors.activity, lang)}</div> // Ошибка для активности
	            )}
	          </div>
	        </div>
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