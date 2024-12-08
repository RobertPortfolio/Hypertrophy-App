import React from 'react';

const WorkoutSummary = ({program}) => {
	return (
		<div className="row row-cols-2">
			<div className="col">Main Goal</div>
			<div className="col">{program.mainGoal}</div>
			<div className="col">Workout Type</div>
			<div className="col">{program.type}</div>
			<div className="col">Training Level</div>
			<div className="col">{program.level}</div>
			<div className="col">Days Per Week</div>
			<div className="col">{program.daysPerWeek}</div>
			<div className="col">Equipment Required</div>
			<div className="col">{program.equipment}</div>
		</div>
	)
}

export default WorkoutSummary;