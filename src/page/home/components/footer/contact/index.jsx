import React from 'react';
import s from './Contact.module.scss'

function Contact() {
    return (
        <div className={s.contact} data-aos="fade-up"
            data-aos-offset="30">
            <div className="container">
                <div className={s.warpper}>
                    <div className={s.text}>
                        <h2>Solve Complex Data Challenges.</h2>
                        <p>Subscribe to our newsletter for regular updates.</p>
                    </div>
                    <div className={s.input}>
                        <input type="text" placeholder='Enter your email' />
                        <button>Subsribe</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;