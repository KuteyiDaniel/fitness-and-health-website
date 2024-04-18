import React, { useEffect, useState } from 'react'
import { IoPulseSharp } from "react-icons/io5";
import { navigation } from '../types/interface';
import '../scss/NavBar.scss'
import Button from './Button';
import { NavLink } from 'react-router-dom'
//import {GiHamburgerMenu} from "react-icons/gi";
import {IoIosFitness} from "react-icons/io"
import {FcAbout} from "react-icons/fc"
import { RiContactsFill } from "react-icons/ri";
import { PiNewspaperClippingFill } from "react-icons/pi";

const NavBar: React.FC = () => {
    let [navOffset, setNavOffset] = useState(false)
    //const [mobileMenuOpen, updateMobileMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            // console.log('Scroll Y', window.scrollY)

            setNavOffset(window.scrollY > 0)

        })
    }, [])

    const navigationItems: navigation[] = [
        {
            title: 'Training',
            path: '/training',
            icon: <IoIosFitness />
        },

        {
            title: 'About',
            path: '/about',
            icon: <FcAbout />
        },

        {
            title: 'Articles',
            path: '/articles',
            icon: <PiNewspaperClippingFill />
        },

        {
            title: 'Contact',
            path: '/contact',
            icon: <RiContactsFill />
        },
    ]

    const mobileNavigationItems:navigation[] = [
       
        ...navigationItems,
    ];

    console.log(mobileNavigationItems)





    return (
        <>
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


        
        <nav className="mobile-navigation-content">
                   
                      <div className="mobile-navigation-format">
                        <div className="mobile-navigation-navbar-top">
                        <div className="mobile-page-width">
                                    <NavLink to='/'>
                                        <div className='navigation-emblem'>
                                            <IoPulseSharp />
                                            <header className='navigation-title'>PRIMEFIT</header>
                                        </div>
                                    </NavLink>
                            </div>
                                
                            </div>

                            <div className="mobile-navigation-navbar-bottom">
                                {
                                    mobileNavigationItems.map((data,index)=>{
                                        return <div key={index} className='mobile-navigation'>
                                            {data.icon}
                                            <header>{data.title}</header>
                                        </div>
                                    })
                                }
                            </div>
                      </div>
                   
                    
                </nav>
        </>
    )
}

export default NavBar
