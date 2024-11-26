import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import './accordion-item.css'; // Подключаем кастомные стили для анимации

const AccordionItem = ({ header, body }) => {
  const [open, setOpen] = useState(false); // Состояние для открытия/закрытия

  return (
  	<div className="accordion mb-2">
  		<div className="accordion-item bg-dark text-light p-3">
		    <div className="mb-1">
		      <div
		        className={`accordion-header ${open ? 'open mb-2' : ''}`}
		        onClick={() => setOpen(!open)} >
		        <h5 className="m-0">{header}</h5>
		      </div>
		      <Collapse in={open}>
		        <div>
		          {body}
		        </div>
		      </Collapse>
		    </div>
		</div>
    </div>
  );
};

export default AccordionItem;