import '../header/Header.scss'
import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-counter'>
                <div className='counter-child'>
                    <div className='order'>
                        <a className='link' href='https://www.ubereats.com/gb/store/stack-shack/H2bcP4P8Ur2hfkQ_WyZtwQ'>
                            <span className='order-text'>ORDER NOW</span>
                        </a>
                    </div>
                    <div className='logo'>
                        <img className='logo-img' src={logo} alt='logo' />
                    </div>
                    <div className='burger-menu'>
                        <button className='btn'>
                            <AiOutlineMenu className='burger-icon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
