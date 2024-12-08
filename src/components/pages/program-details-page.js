import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchProgram } from '../../actions';
import { WorkoutSummary, WorkoutTables } from '../workout-items';

const ProgramDetailsPage = () => {

	const { id } = useParams();

	const dispatch = useDispatch();
	const { program, loading, error } = useSelector(state => state.program);

	useEffect(() => {
		dispatch(fetchProgram(id)); // Запрос данных программы
	}, [dispatch, id]);

	if (loading) {
	    return <div>Loading...</div>; // Показываем индикатор загрузки
	}

	if (error) {
	    return <div>Error: {error}</div>; // Обработка ошибки
	}

	return (
		<div className="container-sm">
      		{program && 
      		<div>
      			<h1>{program.programName}</h1>
      			<div className="row justify-content-center">
      				<div className="col-12 col-md-8">
      					<Link to={`/programs/update/${program._id}`} >Update</Link>
      					<WorkoutSummary program={program} />
      					<h2>Workout Description</h2>
					    {program.description.split('\n').map((paragraph, index) => (
					    	<p key={index}>
					      		{paragraph}
					   		</p>
					  	))}
						<WorkoutTables program={program} />
      				</div>
      			</div>
      		</div>
      		}
		</div>
	)
}

export default ProgramDetailsPage;