import React from 'react';
import styles from './Header.module.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import logo from '../../imagenes/logo.png';
import foto from '../../imagenes/foto perfil.png';
import ilus from '../../imagenes/cartel.png'
import 'animate.css';



function Header() {

    const [state, setState] = useState(false)

    const stateHandler = () => {
        setState(true)
    }

  return (
    <header className={state == false ? styles.header : styles.headerNone}>
        <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.text}>
                <img className={styles.foto} src={foto} alt="Axel Escobar"/>
                <div>
                  <h3 className={`${styles.nombre} animate__animated animate__bounceInLeft`}>Axel Escobar</h3>
                  <h4 className={`${styles.descri} animate__animated animate__bounceInLeft`}>Fullstack Developer</h4>
                  <div>
                    <Icon icon="carbon:logo-github" width="20" />
                    <Icon icon="iconoir:linkedin" width="20" />
                  </div>
                </div>
           </div>
         <div className={styles.more}>
            <img className={styles.ilustracion} src={ilus} alt='ilus'/>
            <button onClick={stateHandler} className={styles.btn}>
              <h2 className=' vermas animate__animated animate__bounceInLeft'>Ver más</h2>
            </button>
         </div>
        </div>
    </header>
  );
}

export default Header;