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

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <button className={styles.btn} onClick={menuHandler}><Icon icon="icon-park:hamburger-button" width="40" height="40"  /></button>
      <a className={styles.linkCV} target='_blank' href={cv}>Descargar CV</a>

      <ul className={state == false ? styles.navLinks : styles.navLinksMin}>
      
        <li><Link activeClass="active" to="Main_mainContainer__9udr1" spy={true} smooth={true} duration={500}>Inicio</Link></li>
        <li><Link activeClass="active" to="Main_aboutMe__Z-rcd" spy={true} smooth={true} duration={500}>Sobre Mi</Link></li>
        <li><Link activeClass="active" to="Main_projects__H3AmA" spy={true} smooth={true} duration={500}>Proyectos</Link></li>
        <li><Link activeClass="active" to="Main_contacts__9wjHn" spy={true} smooth={true} duration={500}>Contacto</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
