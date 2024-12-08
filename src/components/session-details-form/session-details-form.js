import React from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../translations';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './session-details-form.css';

const SessionDetailsForm = ({handleSubmit, handleChange, handleChangeExercise, handleChangeSet, formData, handleAddExercise, handleAddSet, handleDeleteSet}) => {
	
	const lang = useSelector(state => state.language.lang);

	return (
		<Form onSubmit={handleSubmit} className="p-3">

			<Form.Label className="day-custom mb-3">{formData.day}:</Form.Label>
			{formData.exercises.map((exercise, index) => 
			<div key={exercise.id}>
				<Form.Group controlId="exerciseName" className="mb-3">
			        <Form.Control
			          type="text"
			          placeholder={translate('enterExercise', lang)}
			          name="name"
			          value={exercise.name}
			          onChange={(e)=>handleChangeExercise(e, exercise.id)}
			          className="input-custom bg-dark text-light border-1 rounded-0 text-center"
			        />
			    </Form.Group>
			    <div className="mb-1 row justify-content-around">
			    	<div className="col-1"></div>
				    <Form.Label className="uppercase col-3 text-center">{translate('weight', lang)}</Form.Label>
				    <Form.Label className="uppercase col-3 text-center">{translate('reps', lang)}</Form.Label>
				    <Form.Label className="uppercase col-3 text-center">
				    	<OverlayTrigger
					      placement="bottom"
					      overlay={<Tooltip id="tooltip-bottom">{translate('rirDescription', lang)}</Tooltip>}
					    >
					      <span className="d-inline-block">
					      	{translate('rir', lang)}
					      	<i className="fa-solid fa-info-circle ms-2"></i>  
					      </span>
					    </OverlayTrigger>
				    </Form.Label>
				    <div className="col-2"></div>
				</div>
				{exercise.sets.map((set, index) => (
				<div key={set.id} className="mb-3 row justify-content-around">
					<div className="col-1 d-flex justify-content-center align-items-center text-light">{index+1}</div>
					<Form.Group  controlId="setWeight" className=" col-3">
				        <Form.Control
				          type="number"
				          name="weight"
				          value={set.weight}
				          onChange={(e)=>handleChangeSet(e, set.id, exercise.id)}
				          className="input-custom bg-dark text-light border-1 rounded-0 text-center"
				        />
					</Form.Group>
					<Form.Group  controlId="setReps" className=" col-3">
				        <Form.Control
				          type="number"
				          name="reps"
				          value={set.reps}
				          onChange={(e)=>handleChangeSet(e, set.id, exercise.id)}
				          className="input-custom bg-dark text-light border-1 rounded-0 text-center"
				        />
					</Form.Group>
					<Form.Group  controlId="setRir" className=" col-3">
				        <Form.Control
				          type="text"
				          name="rir"
				          value={set.rir}
				          onChange={(e)=>handleChangeSet(e, set.id, exercise.id)}
				          className="input-custom bg-dark text-light border-1 rounded-0 text-center"
				        />
					</Form.Group>
					<div className="col-2 text-center">
						<Button variant="outline-danger" onClick={()=>handleDeleteSet(set.id, exercise.id)} className="">
							<i className="fa-solid fa-trash"></i>
						</Button>
					</div>
				</div>
				))}
				<div className="text-center mb-3">
				<Button variant="outline-danger" onClick={()=>handleAddSet(exercise.id)} className="">
	                {translate('addSet', lang)}
	            </Button>
	            </div>
            </div>
			
			)}
			<Button variant="outline-danger" onClick={handleAddExercise} className="me-2">
                {translate('addExercise', lang)}
            </Button>
            <Button variant="outline-success" type="submit">
                {translate('submit', lang)}
            </Button>
            <div className="p-3 bg-dark text-light rounded my-3">
			  <label htmlFor="darkTextarea" className="form-label">{translate('sessionNotes', lang)}</label>
			  <textarea 
			    className="form-control bg-dark text-light border-secondary" 
			    id="darkTextarea" 
			    rows="5" 
			    name="notes"
			    value={formData.notes}
			    onChange={(e)=>handleChange(e)}>
			  </textarea>
			</div>

		</Form>
	)
}

export default SessionDetailsForm;