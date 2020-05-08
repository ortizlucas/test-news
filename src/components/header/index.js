import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './index.scss'

const itemsNav = [
  { name: 'Home', to:'/home' },
  { name: 'Ultimas Noticias', to: '/ultimasNoticias' },
  { name: 'Internacionales', to: '/internacionales' },
  { name: 'Argentina', to: '/argentina' }
]


const Header = () => {
  
  const handleHamburger = () => {
    let lineDiv = document.getElementsByClassName('header-layout__hamburger__line')
    let lineDivToArray = [...lineDiv]
    let nav = document.getElementsByClassName('header-layout__nav')

    nav[0].classList.contains('active') ? nav[0].classList.remove('active') : nav[0].classList.add('active') 
    lineDivToArray.map(div =>  div.classList.contains('active') ? div.classList.remove('active') : div.classList.add('active'))
  }
  
  return (
    <header className="header-layout">
      <div onClick={handleHamburger} className="header-layout__hamburger">
        <div className="header-layout__hamburger__line l-top" />
        <div className="header-layout__hamburger__line l-mid" />
        <div className="header-layout__hamburger__line l-bot" />
      </div>
      <div className="header-layout__logo">
        <h1>Diario</h1>
      </div>
      <nav className="header-layout__nav">
        <ul className="header-layout__nav__ul">
          {
            itemsNav.map(({name, to}, i) => (
              <li key={`nav-item-${i}`} className="header-layout__nav__ul__li">
                <Link to={to}>{name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header