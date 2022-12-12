import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';


const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7b73v8j', 'template_9w2hr59', form.current, '0_Wlwq7rx_KTC31gU')
            .then((result) => {
                toast('Your Message Sent Successfully');
                navigate('/');

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <Header></Header>
            <div>
                <form ref={form} onSubmit={sendEmail} className="card-body w-4/5 lg:w-2/5 mx-auto">
                    <label>Name</label>
                    <input type="text" name="user_name" className="input input-bordered" required />
                    <label>Email</label>
                    <input type="email" name="user_email" className="input input-bordered" required />
                    <label>Message</label>
                    <textarea name="message" className="textarea textarea-accent" required />
                    <input className='btn btn-success' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;