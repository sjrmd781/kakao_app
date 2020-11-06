import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './style.css';


export default class Friends extends Component {
    render() {
        return (
            <>
            <header className="top-header">
                <div className="header__top">
                <div className="header__column">
                    <i className="fa fa-fighter-jet"></i>
                    <i className="fa fa-wifi"></i>
                </div>
                <div className="header__column">
                    <span className="header__time">17:33</span>
                </div>
                <div className="header__column">
                    <i className="fa fa-moon-o"></i>
                    <i className="fa fa-bluetooth-b"></i>
                    <span className="header__battery">100% <i className="fa fa-battery-full"></i></span>
                </div>
                </div>
                <div className="header__bottom">
                <div className="header__column">
                    <span className="header__text">Manage</span>
                </div>
                <div className="header__column">
                    <span className="header__text">Friends <span className="header__number">1</span></span>
                </div>
                <div className="header__column">
                    <i className="fa fa-cog fa-lg"></i>
                </div>
                </div>
            </header>
            <main className="friends">
                <div className="search-bar">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends" />
                </div>
                <section className="friends__section">
                <header className="friends__section-header">
                    <h6 className="friends__section-title">My Profile</h6>
                </header>
                <div className="friends__section-rows">
                    <div className="friends__section-row">
                        <img src="images/empty.jpg" alt="" />
                        <a href="profile.html" className="fiends__section-name">
                        My Name
                        </a>
                    </div>
                    <div className="friends__section-row">
                    <img src="images/empty.jpg" alt="" />
                    <span className="fiends__section-name">Friends' Names Display</span>
                    </div>
                </div>
                </section>
                <section className="friends__section">
                <header className="friends__section-header">
                    <h6 className="friends__section-title">Friends</h6>
                </header>
                <div className="friends__section-rows">
                    <div className="friends__section-row with-tagline">
                    <div className="friends__section-column">
                        <img src="images/empty.jpg" alt="" />
                        <span className="friends__section-name">Friend Name</span>
                    </div>
                    <span className="friends__section-tagline">
                        Have a good day. See you soon.
                    </span>
                    </div>
                    
                    <div className="friends__section-row with-tagline">
                    <div className="friends__section-column">
                        <img src="images/empty.jpg" alt="" />
                        <span className="friends__section-name">Friend Name</span>
                    </div>
                    <span className="friends__section-tagline">
                        Have a good day. See you soon.
                    </span>
                    </div>
                    
                    <div className="friends__section-row with-tagline">
                    <div className="friends__section-column">
                        <img src="images/empty.jpg" alt="" />
                        <span className="friends__section-name">Friend Name</span>
                    </div>
                    <span className="friends__section-tagline">
                        Have a good day. See you soon.
                    </span>
                    </div>
                    
                    <div className="friends__section-row with-tagline">
                    <div className="friends__section-column">
                        <img src="images/empty.jpg" alt="" />
                        <span className="friends__section-name">Friend Name</span>
                    </div>
                    <span className="friends__section-tagline">
                        Have a good day. See you soon.
                    </span>
                    </div>
                    
                </div>
                </section>
            </main>
            </>
        )
    }
}
