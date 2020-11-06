import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

export default class More extends Component {
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

                    </div>
                    <div className="header__column">
                        <span className="header__text">More</span>
                    </div>
                    <div className="header__column">
                        <i className="fa fa-cog fa-lg"></i>
                    </div>
                    </div>
                </header>
                <main className="more">
                    <header className="more__header">
                    <div className="more-header__column">
                        <img src="images/empty.jpg" alt="" />
                        <div className="more-header__info">
                        <h3 className="more-header__title">
                            My Name
                        </h3>
                        <span className="more-header__subtitle">
                            UserId@gmail.com
                        </span>
                        </div>
                    </div>
                    <i className="fa fa-comment-o fa-2x"></i>
                    </header>
                    <section className="more__options">
                    <div className="more__option">
                        <i className="fa fa-smile-o fa-2x"></i>
                        <span className="more__option-title">Emoticons</span>
                    </div>
                    <div className="more__option">
                        <i className="fa fa-paint-brush fa-2x"></i>
                        <span className="more__option-title">Themes</span>
                    </div>
                    <div className="more__option">
                        <i className="fa fa-hand-peace-o fa-2x"></i>
                        <span className="more__option-title">Plus Friend</span>
                    </div>
                    <div className="more__option">
                        <i className="fa fa-user-circle-o fa-2x"></i>
                        <span className="more__option-title">Account</span>
                    </div>
                    </section>
                    <section className="more__plus-friends">
                    <header className="plus-friends__header">
                        <h2 className="plus-friends__title">Plus Friends</h2>
                        <span className="plus-friends__learn-more">
                        <i className="fa fa-info-circle"></i>
                        Learn More
                        </span>
                    </header>
                    <div className="plus-friends__items">
                        <div className="plus-friends__item">
                            <i className="fa fa-cutlery"></i>
                            <span className="plus-friends__item-title">Order</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-home"></i>
                            <span className="plus-friends__item-title">Store</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-television"></i>
                            <span className="plus-friends__item-title">TV Channel/Radio</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-pencil"></i>
                            <span className="plus-friends__item-title">Creation</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-graduation-cap"></i>
                            <span className="plus-friends__item-title">Education</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-university"></i>
                            <span className="plus-friends__item-title">Politics/Society</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-krw"></i>
                            <span className="plus-friends__item-title">Finance</span>
                        </div>
                        <div className="plus-friends__item">
                            <i className="fa fa-video-camera"></i>
                            <span className="plus-friends__item-title">Movies/Music</span>
                        </div>
                    </div>
                    </section>
                    <section className="more__links">
                    <div className="more__option">
                        <img src="images/kakaoStory.png" alt="" className="more__options-image" />
                        <span className="more__options-title">Kakao Story</span>
                    </div>
                    <div className="more__option">
                        <img src="images/path.png" alt="" className="more__options-image" />
                        <span className="more__options-title">Path</span>
                    </div>
                    <div className="more__option">
                        <img src="images/kakaoFriends.png" alt="" className="more__options-image" />
                        <span className="more__options-title">kakao friends</span>
                    </div>
                    </section>
                </main> 
            </>
        )
    }
}
