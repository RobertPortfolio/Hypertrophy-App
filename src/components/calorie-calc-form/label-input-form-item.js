import React from 'react';

const LabelInputFormItem = ({ id, name, value, handleChange, labelText, errorText, isError}) => {
	return (
		<div className="mb-3 row">
			<label 
				htmlFor={id}
				className="form-label col-8 col-md-6">
				{labelText}
			</label>
			<div className="col-4 col-md-6">
				<input 
					type="number" 
					className={`form-control col ${ isError ? "is-invalid" : ""}`} 
					name={name}
					id={id}
					value={value}
					onChange={handleChange} 
				/>
				{isError && (
					<div className="text-danger">{errorText}</div> // Ошибка для пола
				)}
			</div>
		</div>
	)
}

const LabelRadioInputFormItem = ({ name, labelText, errorText, isError, optionsList, formDataOption, handleChange }) => {
	return (
		<div className="my-3 row">
          <label className="col-6 col-md-6 form-label">{labelText}</label>
          <div className="col-6 col-md-6">
          	{optionsList.map((option, index) => (
          		<div className="form-check mb-1" key={index}>
	              <input 
	                className="form-check-input"
	                type="radio" 
	                name={name}
	                id={option.id}
	                value={option.value}
	                onChange={handleChange} 
	                checked={option.value===formDataOption}
	              />
	              <label className="form-check-label" htmlFor={option.id}>
	                {option.text}
	              </label>
	            </div>
          	))}

            { isError && (
              <div className="text-danger">{errorText}</div> // Показываем текст ошибки, если не выбрана цель
            )}
          </div>
        </div>
	)
}


export { LabelInputFormItem, LabelRadioInputFormItem };