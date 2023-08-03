import React from 'react'
import './styles/Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <section>
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className='checkbtn' >
              <GiHamburgerMenu />
                </label>
            <label className="porfolio">Porfolio</label>
            <ul>
                <li><a className='active' href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">More</a></li>
            </ul>
        </nav>
    </section>
  )
}

export default Header
