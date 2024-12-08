import React from 'react';

const WorkoutTables = ({ program }) => {
	return (
		<div>
			<h2>{program.programName}</h2>
			{program.workouts.map((workout) => (
					<div key={workout._id}>
						<h4>{workout.dayName}</h4>
						<table className="table table-dark table-striped table-bordered">
							<thead>
					          	<tr>
						            <th>Exercise</th>
						            <th>Sets</th>
						            <th>Reps</th>
					          	</tr>
					        </thead>
				          	<tbody>
          						{workout.exercises.map((exercise, exIndex) => (
          							<tr key={exercise._id}>
	          							<td>{exercise.exerciseName}</td>
	          							<td>{exercise.sets}</td>
	          							<td>{exercise.reps}</td>
	          						</tr>
          						))}
        					</tbody>
						</table>
					</div>
				)
			)}
		</div>
	)
}

export default WorkoutTables;