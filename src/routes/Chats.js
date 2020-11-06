import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

export default class Chats extends Component {
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
                        <span className="header__text">Edit</span>
                    </div>
                    <div className="header__column">
                        <span className="header__text">Chats <i className="fa fa-caret-down"></i></span>
                    </div>
                    <div className="header__column">

                    </div>
                    </div>
                </header>
                <main className="chats">
                    <div className="search-bar">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Find friends, chats, Plus Friends" />
                    </div>
                    <ul className="chats__list">
                    <li className="chats__chat">
                        <a href="chat.html">
                        <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                            <h3 className="chat__user">Friend Name</h3>
                            <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                        </div>
                        <span className="chat__date-time">
                            17:33
                        </span>
                        </a>
                    </li>
                    <li className="chats__chat">
                        <a href="chat.html">
                        <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                            <h3 className="chat__user">Friend Name</h3>
                            <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                        </div>
                        <span className="chat__date-time">
                            17:33
                        </span>
                        </a>
                    </li>
                    <li className="chats__chat">
                        <a href="chat.html">
                        <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                            <h3 className="chat__user">Friend Name</h3>
                            <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                        </div>
                        <span className="chat__date-time">
                            17:33
                        </span>
                        </a>
                    </li>
                    <li className="chats__chat">
                        <a href="chat.html">
                        <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                            <h3 className="chat__user">Friend Name</h3>
                            <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                        </div>
                        <span className="chat__date-time">
                            17:33
                        </span>
                        </a>
                    </li>
                    <li className="chats__chat">
                        <a href="chat.html">
                        <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                            <h3 className="chat__user">Friend Name</h3>
                            <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                        </div>
                        <span className="chat__date-time">
                            17:33
                        </span>
                        </a>
                    </li>
                    <li className="chats__chat">
                        <a href="chat.html">
                        <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                            <h3 className="chat__user">Friend Name</h3>
                            <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                        </div>
                        <span className="chat__date-time">
                            17:33
                        </span>
                        </a>
                    </li>
                        <li className="chats__chat">
                        <a href="chat.html">
                            <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                                <h3 className="chat__user">Friend Name</h3>
                                <span className="chat__last-message">Hello! This is a test message!</span>
                            </div>
                            </div>
                            <span className="chat__date-time">
                            17:33
                            </span>
                        </a>
                        </li>
                        <li className="chats__chat">
                        <a href="chat.html">
                            <div className="chat__content">
                            <img src="images/empty.jpg" />
                            <div className="chat__preview">
                                <h3 className="chat__user">KakaoTalk</h3>
                                <span className="chat__last-message">You logged into KakaoTalk PC</span>
                            </div>
                            </div>
                            <span className="chat__date-time">
                            Jul 29
                            </span>
                        </a>
                        </li>
                    </ul>
                    <div className="chat-btn">
                    <i className="fa fa-comment"></i>
                    </div>
                </main>
            </>
        )
    }
}
