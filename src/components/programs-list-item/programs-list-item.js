import React from 'react';
import { Link } from 'react-router-dom'; 
import './programs-list-item.css';

const ProgramsListItem = ({ program, handleDelete, handleUpdate }) => {
	return (
		<Link 
			to={`/programs/${program._id}`} 
			className="card bg-dark text-light mb-3 border border-2 card-custom text-center w-100" >
			<img src={program.photo} className="card-img-top" alt={program.programName} />
			<div className="card-body">
			    <h5 className="card-title">{program.programName}</h5>
			    <p className="card-text">{program.shortDescription}</p>
			    <button 
					className="btn btn-outline-danger fa fa-trash" 
					onClick={()=>handleDelete(program._id)}>
            	</button>
		  	</div>
		</Link>
	)
}

export default ProgramsListItem;