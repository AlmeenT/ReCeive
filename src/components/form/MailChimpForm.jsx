import React from 'react'
import './Form.css'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Form from './Form';

const MailchimpForm = props => {

    const postUrl = `https://ymail.us10.list-manage.com/subscribe?u=300386c814c61bec25b5d3eab&id=277948078a`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Form
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailChimpForm