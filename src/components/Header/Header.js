import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="headerLogo" src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" alt="amazon" />
            <div className="headerSearch">
                <input className="headerSearchIn" type="text" />
            </div>

            <div className="headerNav">
                <div className="headerOption">
                    <span className="headerOptionLineOne">Hello Guest</span>
                    <span className="headerOptionLineTwo">Sign In</span>
                </div>

                <div className="headerOption">
                    <span className="headerOptionLineOne">Returns</span>
                    <span className="headerOptionLineTwo">& Orders</span>
                </div>

                <div className="headerOption">
                    <span className="headerOptionLineOne">Your</span>
                    <span className="headerOptionLineTwo">Prime</span>
                </div>
            </div>
        </div>
    );
};

export default Header;