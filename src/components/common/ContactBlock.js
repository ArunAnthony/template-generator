import React from 'react';
import emailjs from 'emailjs-com';


import './ContactBlock.scss';

const ContactBlock = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        debugger;
        emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className='contact-block-outer-wrapper'>
            <h4>
                Contact
            </h4>

            <form className="contact-form" onSubmit={sendEmail}>
                <div className='wrapper-input'>
                    <div>Full name</div>
                    <input type="text" name="name" required />
                </div>
                <div className='wrapper-input'>
                    <div>Email address</div>
                    <input type="email" name="email" required />
                </div>
                <div className='wrapper-input'>
                    <div>Message</div>
                    <textarea name="message" required />
                </div>
                <button type="submit" value="Send" className='btn'> Send</button>
            </form>
        </div>
    )
}

export default ContactBlock;
