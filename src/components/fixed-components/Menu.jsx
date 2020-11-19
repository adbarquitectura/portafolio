import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './Menu.css';
import ButtonCircle from '../buttons/ButtonCircle';
import PresentationHome from '../dinamic-components/PresentationHome';
import ProjectsView from '../../views/ProjectsView';
import AboutView from '../../views/AboutView';
import ContactModule from './ContactModule';
import ContactView from '../../views/ContactView';

const Menu = (props) => {
    const [textButtonCircle, setTextButtonCircle] = useState('+');
    const [colorMenu, setColorMenu] = useState({ backgroundColor: 'transparent' })
    const [showMenu, setShowMenu] = useState({ display: 'none' });
    const [showContact, setShowContact] = useState({ display: 'none' });
    const [liActive, setLiActive] = useState({ color: '#F03700', fontSize: '22px', fontWeight: '900' });

    const showMenuList = () => {
        setColorMenu({ backgroundColor: '#003D5D'});
        setTextButtonCircle('-');
        setShowMenu({ display: 'block'});
    };

    const hideMenuList = () => {
        setColorMenu({ backgroundColor: 'transparent' });
        setLiActive({ backgroundColor: '#fffff', fontSize: '20px', fontWeight: '400' });
        setTextButtonCircle('+');
        setShowMenu({ display: 'none'});
        setShowContact({ display: 'none' });
    };

    const showMenuContact = () => {
        setShowContact({ display: 'block' });
        setLiActive({ backgroundColor: '#fffff', fontSize: '20px', fontWeight: '400' });
    }

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
                <Route path='/contact'>
                    <ContactView />
                </Route>
            </Switch>



            <div style={colorMenu} className="box-menu">

                <div className="box-menu-button">
                    <ButtonCircle
                        contenidobtn={textButtonCircle}
                        funcion={showMenuList}
                    />
                </div>

                <div style={showMenu} className="box-menu-dropdown">
                    <ul>
                        <li onClick={hideMenuList}><Link to={props.linkToFirst} style={liActive}>{props.liFirstText}</Link></li>
                        <li onClick={hideMenuList}><Link to={props.linkToSecond}>{props.liSecondText}</Link></li>
                        <li onClick={showMenuContact}><Link to={props.linkToThird}>{props.liThirdText}</Link></li>
                    </ul>

                </div>
                <div style={showContact} className="box-menu-list-extra">

                </div>

            </div>
            <ContactModule
                visible={showContact}
            />

        </Router>

    );
};

export default Menu;