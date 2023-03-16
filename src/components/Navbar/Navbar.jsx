import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../imagenes/logo.png';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link} from "react-scroll";
import cv from './CV.pdf'


function Navbar() {


    const [state, setState] = useState(false);

    const menuHandler = () => {
        setState(!state)
    }

    const closeMin = () => {
      setState(false)
    }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={state ==true ? styles.menuContainer: styles.menuContainerMin}>
      <button className={styles.btn} onClick={menuHandler}><Icon icon="icon-park-outline:hamburger-button" color="#e88c3c" width="40" /></button>
      </div>
      <a className={styles.linkCV} target='_blank' href={cv}>Descargar CV</a>

      <ul  className={state == true ? styles.navLinks : styles.navLinksMin}>
      
        <li><Link activeClass="active" to="Main_mainContainer__9udr1" spy={true} smooth={true} duration={500}>Inicio</Link></li>
        <li><Link activeClass="active" to="Main_aboutMe__Z-rcd" spy={true} smooth={true} duration={500}>Sobre Mi</Link></li>
        <li><Link activeClass="active" to="Main_projects__H3AmA" spy={true} smooth={true} duration={500}>Proyectos</Link></li>
        <li><Link activeClass="active" to="Main_contacts__9wjHn" spy={true} smooth={true} duration={500}>Contacto</Link></li>
        {/* <li ><Link activeClass="active" to="Main_mainContainer__0MG5C" spy={true} smooth={true} duration={500}>Inicio</Link></li>
        <li><Link activeClass="active" to="Main_aboutMe__9BEq8" spy={true} smooth={true} duration={500}>Sobre Mi</Link></li>
        <li><Link activeClass="active" to="Main_projects__2HY7t" spy={true} smooth={true} duration={500}>Proyectos</Link></li>
        <li><Link activeClass="active" to="Main_contacts__f6DNy" spy={true} smooth={true} duration={500}>Contacto</Link></li> */}

      </ul>
    </nav>
  );
}

export default Navbar;
