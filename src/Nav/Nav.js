import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">
                    Home
                </Link>
                <Link to="/list">
                    Collection
                </Link>
                <Link to="/new">
                    Add New Concert
                </Link>
                <Link to="/stats">
                    Statistics
                </Link>
            </div>
        )
    }
}

export default Nav;