import React from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../translations';

const SessionDetailsResultsPage = () => {

	const { day, notes, exercises } = useSelector(state => state.sessionDetails);
	const lang = useSelector(state => state.language.lang);

	return (
		<div className="container mt-4">
	      <h3 className="text-center">Exercise Log for {day}</h3>
	      <table className="table table-dark table-striped table-bordered">
	        <thead>
	          <tr>
	            <th>#</th>
	            <th>{translate('exerciseName', lang)}</th>
	            <th>{translate('set', lang)}</th>
	            <th>{translate('weight', lang)}</th>
	            <th>{translate('reps', lang)}</th>
	            <th>{translate('rir', lang)}</th>
	          </tr>
	        </thead>
	        <tbody>
	          {exercises.map((exercise, exIndex) => (
	            exercise.sets.map((set, setIndex) => (
	              <tr key={`${exercise.id}-${set.id}`}>
	                {setIndex === 0 ? (
	                  <td rowSpan={exercise.sets.length}>{exIndex + 1}</td>
	                ) : null}
	                {setIndex === 0 ? (
	                  <td rowSpan={exercise.sets.length}>{exercise.name || "No Name"}</td>
	                ) : null}
	                <td>{setIndex + 1}</td>
	                <td>{set.weight || "N/A"}</td>
	                <td>{set.reps || "N/A"}</td>
	                <td>{set.rir || "N/A"}</td>
	              </tr>
	            ))
	          ))}

	          {notes!=='' && 
	          	<tr key="notes"><td colSpan="100%">{notes}</td></tr>
	          }
	        </tbody>
	      </table>
	    </div>
	)
}

export default SessionDetailsResultsPage;