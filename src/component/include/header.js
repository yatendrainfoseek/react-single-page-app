import React, { Component } from 'react';
    import Nav from './nav';
        class Header extends Component{
            render(){
                return (
                    <header  className="container">
                         <Nav />
                    </header>
            );
        }
    }
export default Header;