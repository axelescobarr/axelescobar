import React, { useEffect } from 'react';
import styles from './Main.module.css';
import Navbar from '../Navbar/Navbar';
import avatar from '../../imagenes/avatar.png';
import 'animate.css';
import flexagenda from '../../imagenes/Flexagenda.JPG';
import rick from '../../imagenes/rickAndMorty.JPG';
import wikifoods from '../../imagenes/wikifoods.JPG';
import { Icon } from '@iconify/react';
import { useState } from 'react';

function Main() {

    const [disenoIndex, setDisenoIndex] = useState(0)
    const [frontIndex, setFrontIndex] = useState(0)
    const [backIndex, setBackIndex] = useState(0)


    const designMorehandler = () => {
        if(disenoIndex == 2){
            setDisenoIndex(0)
        }else{
            setDisenoIndex(disenoIndex + 1)
        }
    }

    const designLesshandler = () => {
        if(disenoIndex == 0){
            setDisenoIndex(2)
        }else{
            setDisenoIndex(disenoIndex - 1)
        }
    }

    const frontMorehandler = () => {
        if(frontIndex == 7){
            setFrontIndex(0)
        }else{
            setFrontIndex(frontIndex + 1)
        }
    }

    const frontLesshandler = () => {
        if(frontIndex == 0){
            setFrontIndex(7)
        }else{
            setFrontIndex(frontIndex - 1)
        }
    }

    const backMorehandler = () => {
        if(backIndex == 4){
            setBackIndex(0)
        }else{
            setBackIndex(backIndex + 1)
        }
    }

    const backLesshandler = () => {
        if(backIndex == 0){
            setBackIndex(4)
        }else{
            setBackIndex(backIndex - 1)
        }
    }

    const scrollType = {
        duration: 1000,
        delay: 5,
        smooth: true, // linear “easeInQuint” “easeOutCubic” 
        offset: -10,
    }

    const diseno = [{name: 'Figma', icon: <Icon icon="logos:figma" width="40" /> },
                    {name: 'Photoshop CS6', icon: <Icon icon="logos:adobe-photoshop" width="50"/> },
                    {name: 'Canva', icon: <Icon icon="cib:canva" color="#687add" width="50" />}]

    const front = [{name: 'CSS', icon: <Icon icon="skill-icons:css"  width="50" />},
                   {name: 'HTML', icon: <Icon icon="skill-icons:html" width="50" />},
                   {name: 'React', icon: <Icon icon="vscode-icons:file-type-reactjs" width="50" /> },
                   {name: 'Javacript', icon: <Icon icon="skill-icons:javascript" width="50" />},
                   {name: 'Typescript', icon: <Icon icon="skill-icons:typescript" width="50" />},
                   {name: 'Bootstrap', icon: <Icon icon="skill-icons:bootstrap" width="50" />},
                   {name: 'Tailwind', icon: <Icon icon="vscode-icons:file-type-tailwind" width="50" />},
                   {name: 'Redux', icon: <Icon icon="skill-icons:redux" width="50" />}]

    const back = [{name: 'Node.js', icon: <Icon icon="vscode-icons:folder-type-light-node"width="50" />},
                  {name: 'Express', icon: <Icon icon="logos:express" width="50" />},
                  {name: 'PostgreSQL', icon: <Icon icon="logos:postgresql" width="50" />},
                  {name: 'Sequelize', icon: <Icon icon="logos:sequelize" width="50" />},
                  {name: 'Python', icon: <Icon icon="vscode-icons:file-type-python" width="50" />}]


  return (
    <main className={styles.main}>
    <Navbar/>
    <div className={styles.mainContainer}>
        <h2 className={styles.title}>Diseñador y desarrollador web fullstack</h2>
        <p className={styles.para}>Diseño y llevo a código cosas sencillas y hermosas, me encanta hacerlo</p>
        <img className={styles.avatar} src={avatar} alt='avatar'/>
    </div>
    <div  className={styles.aboutMe}>
        <div className={styles.textCont}>
            <h2 className={styles.textContTitle}>Hola! soy Axel, encantado de conocerte</h2>
            <p className={styles.textContPara}>Soy un desarrollador fullstack web stack P.E.R.N. con experiencia en diseño UX/UI,
            soy un joven apasionado de la programación en busca de perfeccionar mis conocimientos, motivado por el desarrollo personal y lo gratificante de aprender.
            He trabajado en diversos proyectos, tanto de manera autónoma como en diversos equipos, de los cuales he aprendido y mejorado muchas soft skills como son la empatía, el trabajo en equipo, compromiso y pensamiento crítico.</p>
        </div>
        <div className={styles.contenedoresCont}>
            <div className={styles.contenedor}>
                <div className={styles.icon}>
                    <Icon icon="fluent-mdl2:design" color="white" width="40" height="40" />
                </div>
                <h3 className={styles.containerTitle}>Diseño</h3>
                <p className={styles.containerText}>Me gusta inspirarme y crear diseños de todo tipo, siempre basados en tener la mejor UX posible</p>
                <h4 className={styles.containerTecnologias}>Tecnologias</h4>
                <div className={styles.render}>
                    <button onClick={designLesshandler} className={styles.btnLogo}><Icon className={styles} icon="material-symbols:arrow-back-ios-rounded" width="18" /></button>
                    <div className={styles.rendering}>
                        {diseno[disenoIndex].icon}
                        {diseno[disenoIndex].name}
                    </div>
                    <button onClick={designMorehandler} className={styles.btnLogo}><Icon icon="material-symbols:arrow-back-ios-rounded" width="20" rotate={2} /></button>
                </div>
            </div>
            <div className={styles.contenedor}>
                <div className={styles.icon}>
                    <Icon icon="simple-icons:frontendmentor" color="white" width="40" height="40" />
                </div>
                <h3 className={styles.containerTitle}>Frontend Developer</h3>
                <p className={styles.containerText}>Aqui creo todo lo que diseño, me gusta tener un codigo limpio y ordenado, con muchas animaciones</p>
                <h4 className={styles.containerTecnologias}>Tecnologias</h4>
                <div className={styles.render}>
                    <button onClick={frontLesshandler} className={styles.btnLogo}><Icon className={styles} icon="material-symbols:arrow-back-ios-rounded" width="18" /></button>
                    <div className={styles.rendering}>
                        {front[frontIndex].icon}
                        {front[frontIndex].name}
                    </div>
                    <button onClick={frontMorehandler} className={styles.btnLogo}><Icon icon="material-symbols:arrow-back-ios-rounded" width="20" rotate={2} /></button>
                </div>
            </div>
            <div className={styles.contenedor}>
                <div className={styles.icon}>
                    <Icon icon="simple-icons:backendless" color="white" width="40" height="40" />
                </div>
                <h3 className={styles.containerTitle}>Backend Developer</h3>
                <p className={styles.containerText}>Me gusta el codigo con buenas practicas, siempre diseñar los modelos de la BDD y las rutas antes.</p>
                <h4 className={styles.containerTecnologias}>Tecnologias</h4>
                <div className={styles.render}>
                    <button onClick={backLesshandler} className={styles.btnLogo}><Icon className={styles} icon="material-symbols:arrow-back-ios-rounded" width="18" /></button>
                    <div className={styles.rendering}>
                        {back[backIndex].icon}
                        {back[backIndex].name}
                    </div>
                    <button onClick={backMorehandler} className={styles.btnLogo}><Icon icon="material-symbols:arrow-back-ios-rounded" width="20" rotate={2} /></button>
                </div>
            </div>
        </div>
    </div>
    <div  className={styles.projects}>
        <div className={styles.imgContainer}>
            <a target='_blank' href='https://flex-agenda.vercel.app'><img className={`${styles.project} ${styles.flexagenda}`} src={flexagenda} alt='flexagenda'/></a>
            <div className={`${styles.projectHover} `}>
                <h1>Flexagenda es blabla</h1>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <a target='_blank' href='https://flex-agenda.vercel.app'><img className={`${styles.project} ${styles.rick}`} src={rick} alt='flexagenda'/></a>
            <div className={`${styles.projectHover} `}>
                <h1>Flexagenda es blabla</h1>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <a target='_blank' href='https://deploy-pi-food.vercel.app/'><img className={`${styles.project} ${styles.wikifoods}`} src={wikifoods} alt='flexagenda'/></a>
            <div className={`${styles.projectHover} `}>
                <h1>Flexagenda es blabla</h1>
            </div>
        </div>
        {/* <div>
            <img className={`${styles.project} ${styles.flexagenda}`} src={flexagenda} alt='flexagenda'/>
        </div> */}
    </div>
    <div  className={styles.contacts}>
        <h2>Mi nombre es Axel Escobar Schneider</h2>
    </div>
    <div className={styles.footer}>
        <h3>All rights reserved. Axel Escobar Fullstack Developer</h3>
    </div>
      
    </main>
  );
}

export default Main;
