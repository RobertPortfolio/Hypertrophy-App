import React from 'react';
import AccordionItem from '../accordion-item';

const AboutAccordion = () => {

	const questions = [
	  ['How is the strength determined?', 'The strength score is closely related'],
	  ['How is the strength determined?', 'The strength score is closely related'],
	  ['How is the strength determined?', 'The strength score is closely related'],
	  ['How is the strength determined?', 'Susloore is closely related'],
	];

	return (
		<div className="mt-3">
			{questions.map((q, idx)=> {
				return (
					<AccordionItem key={idx} header={q[0]} body={q[1]}/>)
			})}
	      	<AccordionItem header="How is the strength score determined?" body="The strength score is closely related to the Wilks score, which is commonly used in powerlifting to compare totals across weight classes. While the Wilks score is designed to measure powerlifting totals, the strength score is designed to measure strength per-lift.The exact definition of the strength score for a single lift is this: If the lifter were as strong in the performed lift as he or she were in all other lifts, then the score of the lift is equal to 1/4 of the lifter's hypothetical powerlifting wilks, in addition to an age adjustment (see the references below) if the lifter is younger than 23 or older than 40.The 'total' strength score averages the highest scores in each category: The squat, floor pull, pull-up, horizontal press, and vertical press.The score for a single muscle group is measured by a weighted average of the lifts which involve that muscle group."/>
	      	<AccordionItem header="suslo" body="musaslo"/>
	      	<AccordionItem header="suslo" body="musaslo"/>
      	</div>
	)
}

export default AboutAccordion;