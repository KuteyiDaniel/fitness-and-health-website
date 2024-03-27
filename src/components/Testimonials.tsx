import React from 'react'
import { testimonial } from '../types/interface'
import '../scss/Testimonials.scss'
import { FaHeart } from "react-icons/fa";

const Testimonials = () => {

    const customerReviews: testimonial[] = [
        {
            name: 'Micheal Ojogbue',
            review: "PrimeFit changed my life. The fitness plans are tailored to my needs."
                + "I've seen a significant improvement in my strength and endurance. I can't imagine my workout routine without it.",
            image: '',
            profession: 'Manager',
            company: 'Dovers Technologies',
            companyLink: 'https://instagram.com/dover_technology?igshid=MzRlODBiNWFlZA=='
        },

        {
            name: 'Temitope Ojeyinka',
            review: "I'm in love with PrimeFit! The workouts are so diverse, it's like having a personal gym at home."
                + "I've tried everything from yoga to high-intensity interval training, and I'm never bored.",
            image: '',
            profession: 'Teacher',
            company: 'Corona Schools',
            companyLink: 'https://coronaschools.org/'
        },

        {
            name: 'Chioma Okpeva',
            review: "It's like having a personal coach who knows my strengths and weaknesses and pushes me to do better. I've never felt so motivated.",
            image: '',
            profession: 'Student',
            company: 'Gregory University',
            companyLink: 'https://gregoryuniversityuturu.edu.ng/home/'
        },

        {
            name: 'Samuel Kuteyi',
            review: "Thanks to PrimeFit, my health has improved significantly. I've lost weight, gained muscle, and feel more energetic."
                + "It's been a fantastic journey to better health.",
            image: '',
            profession: 'Web Developer',
            company: 'Turnover CRM',
            companyLink: 'https://www.turnovercrm.com/'
        },
    ]


    return (
        <div className='testimonial-page-width'>
            <div className="testimonial-text">
                <header className='testimonial-header'>PrimeFit is for you</header>
                <p className='debut-text'>Since it's debut, PrimeFit has been embraced by people worldwide seeking <span> hassle-free workouts. </span> </p>
                <p className='bold-text'> Meet our happy users! Their experiences with PrimeFit speaks volume about our effectiveness.</p>

            </div>
            <div className="testimonial-section">
                {
                    customerReviews.map((data, index) => {
                        return <div className='testimonial' key={index}>
                            <p className='comment'>"{data.review}"</p>
                            <div className="customer-info">
                                <div className='customer-image'>
                                    <FaHeart />
                                </div>
                                <div>
                                    <p className='customer-name'> {data.name}</p>
                                    <p className='customer-profession'>{data.profession} at <a className='customer-company' href={data.companyLink}>{data.company}</a> </p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Testimonials
