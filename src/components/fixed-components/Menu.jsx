import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './Menu.css';
import ButtonCircle from '../buttons/ButtonCircle';
import ContactModule from './ContactModule';
import PresentationHome from '../dinamic-components/PresentationHome';
import ProjectsView from '../../views/ProjectsView';
import AboutView from '../../views/AboutView';


const Menu = (props) => {
    const [textButtonCircle, setTextButtonCircle] = useState('+')
    const [colorMenu, setColorMenu] = useState({ backgroundColor: '#021130' })
    const [showMenu, setShowMenu,] = useState({ display: 'none' })
    //const [showContact, setShowContact,] = useState({ display: 'none' })

    const showMenuList = () => {
        setColorMenu({ backgroundColor: 'red' });
        //setColorMenu({backgroundColor: '#003D5D'});
        setTextButtonCircle('-');
        setShowMenu({ display: 'block' });
    };

    /* const showMenuContact = () => {
        setShowContact({ display: 'block' });
    } */

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <PresentationHome />
                    <ProjectsView />
                </Route>
                <Route path='/about'>
                    <AboutView />
                </Route>
            </Switch>

            <div style={colorMenu} className="box-menu">

                <div style={colorMenu} className="box-menu-button">
                    <ButtonCircle
                        contenidobtn={textButtonCircle}
                        funcion={showMenuList}
                    />
                </div>

                <div style={showMenu} className="box-menu-dropdown">
                    <ul>
                        <li><Link to={props.linkToFirst}>{props.liFirstText}</Link></li>
                        <li><Link to={props.linkToSecond}>{props.liSecondText}</Link></li>
                        <li><Link to={props.linkToThird}>{props.liThirdText}</Link></li>
                    </ul>

                </div>

            </div>

            <Switch>
                <Route path='/contact'>
                    <ContactModule />
                </Route>
            </Switch>
        </Router>

    );
};

export default Menu;