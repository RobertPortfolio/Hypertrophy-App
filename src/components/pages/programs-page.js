import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { fetchPrograms, deleteProgram } from '../../actions';
import ProgramsListItem from '../programs-list-item';

const ProgramsPage = () => {
  const dispatch = useDispatch();
  const { programs, loading, error } = useSelector(state => state.program);

  useEffect(() => {
    dispatch(fetchPrograms()); // Запрос данных программы
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProgram(id))
  } 

  if (loading) {
    return <div>Loading...</div>; // Показываем индикатор загрузки
  }

  if (error) {
    return <div>Error: {error}</div>; // Обработка ошибки
  }
  
  return (
    <div  className="row">
      <Link to="/programs/add-program">Add your custom program</Link>
      {programs && programs.map((program) => {
        return (
          <div key={program._id} className="col-12 col-md-6 d-flex">
            <ProgramsListItem 
              program={program} 
              handleDelete={handleDelete}
            />
            
          </div>
        )
      }) }
    </div>
  );
};

export default ProgramsPage;