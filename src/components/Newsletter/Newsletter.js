import React from 'react'
import MailChimp from 'react-mailchimp-form';
import './Newsletter.css';


const Newsletter = ({props}) => {

	// const MAILCHIMP_KEY = process.env.REACT_APP_MAILCHIMP_KEY;
	// console.log(MAILCHIMP_KEY);
	return (
		// <p>Subscribe to our Newsletter</p>
		<MailChimp
		action="https://app.us10.list-manage.com/subscribe/post?u=4977749285be69c2b7c13dd6f&amp;id=3bbbdf5b79"
		className='Form'
		fields= {[
			{
				name:'FNAME',
				placeholder: 'First Name',
				type:'text',
				required: true,
				validate: true
			},
			{
				name:'LNAME',
				placeholder: 'Last Name',
				type:'text',
				required: true,
				validate: true
			},
			{
				name:'EMAIL',
				placeholder: 'Email',
				type:'text',
				required: true,
				validate: true
			},
			{
				name:'PHONE',
				placeholder: 'Phone Number',
				type:'text',
				required: true,
				validate: true
			}


		]}
		
		/>
	);
};

export default Newsletter;