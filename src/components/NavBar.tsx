import React, { useEffect, useState } from 'react'
import { IoPulseSharp } from "react-icons/io5";
import { navigation } from '../types/interface';
import '../scss/NavBar.scss'
import Button from './Button';
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
    let [navOffset, setNavOffset] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            // console.log('Scroll Y', window.scrollY)

            setNavOffset(window.scrollY > 0)

        })
    }, [])

    const navigationItems: navigation[] = [
        {
            title: 'Training plans',
            path: '/training'
        },

        {
            title: 'About',
            path: '/about'
        },

        {
            title: 'Articles',
            path: '/articles'
        },

        {
            title: 'Contact',
            path: '/contact'
        },
    ]


    return (
        <nav className={`navigation-bar ${navOffset ? 'navigation-offset' : ''}`}>
            <div className="navigation-page-width">
                <div className="navigation-content">
                    <NavLink to='/'>
                        <div className='navigation-emblem'>
                            <IoPulseSharp />
                            <header className='navigation-title'>PRIMEFIT</header>
                        </div>
                    </NavLink>

                    <ul className='navigation-list' >
                        {
                            navigationItems.map((item, index) => {
                                return <li key={index}>
                                    <NavLink to={item.path} className='navigation-link'>
                                        {item.title}
                                        <span className="active-line"></span>
                                    </NavLink>

                                </li>

                            })
                        }
                    </ul>

                    <Button />
                </div>
            </div>

        </nav>
    )
}

export default NavBar
