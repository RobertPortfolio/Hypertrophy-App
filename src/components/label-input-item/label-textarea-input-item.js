import React from 'react';
import { Form } from 'react-bootstrap';
import './label-input-item.css';

const LabelTextareaInputItem = (props) => {
	return (
		<Form.Group>
            <Form.Label className="mt-1">{props.label}</Form.Label>
            <Form.Control
                as="textarea"
                className="input-custom bg-dark text-light border-1 rounded-0"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                rows={props.rows || 3}
            />
        </Form.Group>
	)
}

export default LabelTextareaInputItem;