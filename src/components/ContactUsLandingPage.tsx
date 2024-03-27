import React from 'react'
import '../scss/ContactUsLandingPage.scss'
import { contactForm } from '../types/interface'
import { PiTelegramLogoDuotone } from 'react-icons/pi'
import { BiMailSend } from 'react-icons/bi'
import { TbMailDown } from 'react-icons/tb'
import { LuSmartphoneNfc } from 'react-icons/lu'
import { GrFacebook, GrInstagram } from 'react-icons/gr'

const ContactUsLandingPage = () => {
    const formFields: contactForm[] = [
        {
            label: 'Your Name',
            placeholder: 'John Doe',
            hasError: false,
            errorText: 'Enter your name',
            value: '',
            type: 'text',
            name: 'name',
            required: true,
            fieldType: 'input'
        },

        {
            label: 'Username',
            placeholder: '@JDoe',
            hasError: false,
            errorText: 'Enter your username',
            value: '',
            type: 'text',
            name: 'username',
            required: true,
            fieldType: 'input'
        },

        {
            label: 'Email Address',
            placeholder: 'Johndoe@yahoo.com',
            hasError: false,
            errorText: 'Enter your email address',
            value: '',
            type: 'text',
            name: 'email',
            required: true,
            fieldType: 'input'
        },

        {
            label: 'Phone',
            placeholder: '(+234) 90 2501 2909',
            hasError: false,
            errorText: 'Enter your phone number',
            value: '',
            type: 'text',
            name: 'phone',
            required: true,
            fieldType: 'input'
        },

        {
            label: 'Message',
            placeholder: 'Leave a message',
            hasError: false,
            errorText: 'Enter a message',
            value: '',
            type: 'text',
            name: 'message',
            required: true,
            fieldType: 'textarea'
        }
    ]
    return (
        <div className='contact-page-width'>
            <div className="contact-section">
                <div className="contact-section-bcg">
                    <img src='./contact-us.jpg' alt='#' className='contact-image' />

                    <div className="contact-text">
                        <header>Any questions? </header>
                        <header>Let's get in touch!</header>

                        <p>Reach out to us and our team of fitness experts will get back to you as soon as possible.
                            We're dedicated to helping you achieve your fitness goal.
                        </p>
                    </div>


                    <div className="contact-form">
                        <div className="first-section">
                            <div className='contact-header'>
                                <header>Send us a Message</header>
                                <BiMailSend />
                            </div>
                            <form className='field-content'>
                                {
                                    formFields.map((field, index) => {
                                        return <div key={index} className='input-field-container'>
                                            <label className='label'>{field.label}</label>
                                            {
                                                field.fieldType === 'input' ?
                                                    <>
                                                        <input
                                                            placeholder={field.placeholder}
                                                            type={field.type}
                                                            className='input-field'
                                                            name={field.name}
                                                        />
                                                    </> :


                                                    <>
                                                        {
                                                            field.fieldType === 'textarea' ?
                                                                <>
                                                                    <textarea
                                                                        className='message'
                                                                        placeholder={field.placeholder}
                                                                        name={field.name}

                                                                    />

                                                                </> : ''
                                                        }
                                                    </>
                                            }

                                        </div>
                                    })
                                }
                            </form>

                            <div className="send-message">
                                <button className="send-button">
                                    <PiTelegramLogoDuotone />
                                </button>
                            </div>

                            <div className='contact-footer'>

                                <div className='contact-info'>
                                    <span>
                                        <TbMailDown />
                                        <a href='#'>primefit@gmail.com</a>
                                    </span>

                                    <span>
                                        <LuSmartphoneNfc />
                                        <p>(+234)81-2028-5323</p>
                                    </span>
                                </div>

                                <footer>PrimeFit Inc. All Rights Reserved</footer>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUsLandingPage
/**

<GrFacebook/>
<GrInstagram/>
 */