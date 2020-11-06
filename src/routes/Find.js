import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

export default class Find extends Component {
    render() {
        return (
            <>
                <header class="top-header">
                    <div class="header__top">
                    <div class="header__column">
                        <i class="fa fa-fighter-jet"></i>
                        <i class="fa fa-wifi"></i>
                    </div>
                    <div class="header__column">
                        <span class="header__time">17:33</span>
                    </div>
                    <div class="header__column">
                        <i class="fa fa-moon-o"></i>
                        <i class="fa fa-bluetooth-b"></i>
                        <span class="header__battery">100% <i class="fa fa-battery-full"></i></span>
                    </div>
                    </div>
                    <div class="header__bottom">
                    <div class="header__column">
                        <span class="header__text">Edit</span>
                    </div>
                    <div class="header__column">
                        <span class="header__text">Find</span>
                    </div>
                    <div class="header__column">

                    </div>
                    </div>
                </header>
                <main class="find">
                    <section class="find__options">
                    <div class="find__option">
                        <i class="fa fa-address-book fa-lg"></i>
                        <span class="find__option-title">Find</span>
                    </div>
                    <div class="find__option">
                        <i class="fa fa-qrcode fa-lg"></i>
                        <span class="find__option-title">QR Code</span>
                    </div>
                    <div class="find__option">
                        <i class="fa fa-mobile fa-lg"></i>
                        <span class="find__option-title">Shake</span>
                    </div>
                    <div class="find__option">
                        <i class="fa fa-envelope-o fa-lg"></i>
                        <span class="find__option-title">Invite via SMS</span>
                    </div>
                    </section>
                    <section class="find__recommended">
                    <header>
                        <h6 class="recommended__title">Recommended Friends</h6>
                    </header>
                    <div class="recommended__none">
                        <span class="recommended__text">You have no recommended friends.</span>
                    </div>
                    </section>
                </main>
            </>
        )
    }
}
