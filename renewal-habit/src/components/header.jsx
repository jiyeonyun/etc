import React, { PureComponent } from 'react';


class Header extends PureComponent {
    render() {
        return (
            <header>
                <i className="logo fa-solid fa-leaf"></i>
                <h1>Habit Tracker</h1>
                <span className='navbar-count'>{this.props.totalCount}</span>
            </header>
        );
    }
}

export default Header;