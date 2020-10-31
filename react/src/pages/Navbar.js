import React from 'react';
import './pages.css'

class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {};
    }


    render() {
        return(
            <div>
                <input type="button" value="Login" />
            </div>
        )
    }
}

export default Navbar;
