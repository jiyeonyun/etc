import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header>
                <span className='logo'><i className="fa-solid fa-leaf"></i></span>
                <h1>Habit Tracker</h1>
                <span className='habit-count'>0</span>
            </header>
        );
    }
}

export default Header;