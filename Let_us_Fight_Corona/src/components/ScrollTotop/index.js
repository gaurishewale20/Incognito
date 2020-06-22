import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useWindowScroll } from 'react-use';
const ScrollToTop = () =>
{
    const { Y: pageYOffset } = useWindowScroll();
    const [ visible, setVisiblity ] = useState( false );

    /* useEffect( () =>
     {
         if ( pageYOffset > 300 )
         {
             setVisiblity( true );
         } else
         {
             setVisiblity( false );
         }
     }, [ pageYOffset ] );
 */
    const scrollToTop = () => window.scrollTo( { top: 0, behaviour: "smooth" } );
    /*  if ( !visible )
      {
          return false;
      }*/
    return (
        <div className="scroll-to-top cursor-pointer text-center" onClick={ scrollToTop }>
            <div className="icon"><KeyboardArrowUpIcon /></div>

        </div>
    );
};

export default ScrollToTop;
