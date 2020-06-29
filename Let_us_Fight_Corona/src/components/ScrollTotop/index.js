import React, { useState } from 'react';
//import { FaArrowCircleUp } from 'react-icons/fa';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
//import '../App.css';

const ScrollToTop = () =>
{

    const [ showScroll, setShowScroll ] = useState( false )

    const checkScrollTop = () =>
    {
        if ( !showScroll && window.pageYOffset > 400 )
        {
            setShowScroll( true )
        } else if ( showScroll && window.pageYOffset <= 400 )
        {
            setShowScroll( false )
        }
    };

    const scrollTop = () =>
    {
        window.scrollTo( { top: 0, behavior: 'smooth' } );
    };

    window.addEventListener( 'scroll', checkScrollTop )

    return ( <div className="scroll-to-top">
        <KeyboardArrowUpIcon className="scrollTop" onClick={ scrollTop } style={ { height: 40, display: showScroll ? 'flex' : 'none' } } />
    </div>
    );
}

export default ScrollToTop;
