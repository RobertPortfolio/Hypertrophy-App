import React from 'react';
import { Form } from 'react-bootstrap';
import { LabelInputItem, LabelTextareaInputItem } from '../label-input-item';
import './program-form.css';

const ProgramForm = ( {formData, handleChange, handleSubmit, handleWorkoutChange, handleExerciseChange, addWorkout, addExercise, textSubmit }) => {
	return (
		<Form onSubmit={handleSubmit} className="">
            <LabelInputItem 
                label="Program Name:"
                type="text"
                name="programName"
                value={formData.programName}
                onChange={handleChange}
                required={true}
            />
            <LabelInputItem 
                label="Main Goal:"
                type="text"
                name="mainGoal"
                value={formData.mainGoal}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Tags (comma-separated):"
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                required={false}
            />
            <LabelTextareaInputItem 
                label="Description:"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Short description:"
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Type:"
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Level:"
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Equipment (comma-separated):"
                type="text"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Days per Week:"
                type="text"
                name="daysPerWeek"
                value={formData.daysPerWeek}
                onChange={handleChange}
                required={false}
            />
            <LabelInputItem 
                label="Photo URL:"
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                required={false}
            />
            <div>
                <label>Workouts:</label>
                <button type="button" onClick={addWorkout} className="btn btn-outline-danger ms-2 my-3">
                    Add Workout
                </button>
                {formData.workouts.map((workout, workoutIndex) => (
                    <div key={workoutIndex} className={`p-3 ${workoutIndex % 2 === 0 ? 'bg-1' : 'bg-2'}`}>
                    	<div className="label-custom">Workout {workoutIndex+1}</div>
                        <LabelInputItem
                            label="Day Name:"
                            type="text"
                            name="dayName"
                            value={workout.dayName}
                            onChange={(e) => handleWorkoutChange(e, workoutIndex)}
                            required={false}
                        />
                        <LabelInputItem 
                            label="Muscle Groups (comma-separated):"
                            type="text"
                            name="muscleGroups"
                            value={workout.muscleGroups}
                            onChange={(e) => handleWorkoutChange(e, workoutIndex)}
                            required={false}
                        />
                        <LabelTextareaInputItem 
                            label="Workout description: "
                            type="text"
                            name="workoutDescription"
                            value={workout.workoutDescription}
                            onChange={(e) => handleWorkoutChange(e, workoutIndex)}
                            required={false}
                        />
                        <div>
                            <label>Exercises:</label>
                            <button
                                type="button"
                                className="btn btn-outline-danger ms-2 my-3"
                                onClick={() => addExercise(workoutIndex)}
                            >
                                Add Exercise
                            </button>
                            {workout.exercises &&
                                workout.exercises.map((exercise, exerciseIndex) => (
                                    <div key={exerciseIndex} className={`p-3 ${exerciseIndex % 2 === 0 ? 'bg-3' : 'bg-4'}`}>
                                    	<div className="label-custom">Exercise - {exerciseIndex+1} (workout {workoutIndex+1})</div>
                                        <LabelInputItem 
                                            label="Exercise Name:"
                                            type="text"
                                            name="exerciseName"
                                            value={exercise.exerciseName}
                                            onChange={(e) => handleExerciseChange(e, workoutIndex, exerciseIndex)}
                                            required={false}
                                        />
                                        <LabelInputItem 
                                            label="Sets:"
                                            type="text"
                                            name="sets"
                                            value={exercise.sets}
                                            onChange={(e) => handleExerciseChange(e, workoutIndex, exerciseIndex)}
                                            required={false}
                                        />
                                        <LabelInputItem 
                                            label="Reps:"
                                            type="text"
                                            name="reps"
                                            value={exercise.reps}
                                            onChange={(e) => handleExerciseChange(e, workoutIndex, exerciseIndex)}
                                            required={false}
                                        />
                                        <LabelInputItem 
                                            label="RIR:"
                                            type="text"
                                            name="rir"
                                            value={exercise.rir}
                                            onChange={(e) => handleExerciseChange(e, workoutIndex, exerciseIndex)}
                                            required={false}
                                        />
                                        <LabelTextareaInputItem 
                                            label="Description:"
                                            type="text"
                                            name="exerciseDescription"
                                            value={exercise.exerciseDescription}
                                            onChange={(e) => handleExerciseChange(e, workoutIndex, exerciseIndex)}
                                            required={false}
                                        />
                                        
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-outline-success" type="submit">{textSubmit} Program</button>
        </Form>
	)
}

export default ProgramForm;