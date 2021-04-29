import React, { useEffect } from 'react';
import './EstilosBotones.css';
import arrow from '../../assets/icons/top.png';

const ButtonTop = () => {
    const [scrolled, setScrolled] = React.useState('');

    const handleScrollBtn = () => {
        const offset = window.scrollY;
        offset > 20 ? setScrolled('btTop-scrolled') : setScrolled('');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollBtn)
    })

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <button
            className={`btTop ${scrolled}`}
            onClick={topFunction}
        >
            <img src={arrow} alt='mail' />
        </button>

    );
};

export default ButtonTop;