

//Not used in this project . Just exploring :)

import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component
{
    constructor ( props )
    {
        super( props );

        this.toggleNav = this.toggleNav.bind( this );
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav ()
    {
        this.setState( {
            isNavOpen: !this.state.isNavOpen
        } );
    }

    render ()
    {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={ this.toggleNav } />
                        <Collapse isOpen={ this.state.isNavOpen } navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/test'><span className="fa fa-home fa-lg"></span> Test</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/essentials'><span className="fa fa-list fa-lg"></span> Essentials</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/moreinfo'><span className="fa fa-address-card fa-lg"></span> More Info</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;