import React, {useState, useEffect} from "react";
import './Form.css'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";


const Form = ({ status, message, onValidated }) => {
  
  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])
  
  const clearFields = () => {
    setEmail('');
  }

  const [email, setEmail] = useState('');


const handleSubmit = (e) => {  
  e.preventDefault();

  email &&
  email.indexOf("@") > -1 &&
  onValidated({
      EMAIL: email
  });
}

  return (
    <div>
      <form action="#" id="form" onSubmit={(e) => handleSubmit(e)} >
        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div className="mc_success">
            Received!
          </div>
        )}
        <div className="formContainer">  
          <div className="email">
            <InputField
              onChangeHandler={setEmail}
              type="email"
              value={email}
              placeholder="your@email.com"
              isRequired
            />
          </div>
          <div className="button">
            <InputField
              label="Notify Me!"
              type="submit"
              formValues={[email]}
            />
          </div>
        </div>  
        
      </form>
    </div>
  );
};

export default Form;
