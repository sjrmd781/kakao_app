import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import '../routes/style.css';

export default class Navigation extends Component {
    
    render() {
        return (
            <div>
                <ul className="tab-bar">
                    <li><NavLink to="/" className="tab-bar__tab" exact activeClassName="active">
                        <i className="fa fa-user"></i>
                        <span className="tab-bar__title">Friends</span>
                    </NavLink></li>
                    <li><NavLink to="/chats" className="tab-bar__tab" exact activeClassName="active">
                        <i className="fa fa-comment"></i>
                        <span className="tab-bar__title">Chats</span>
                    </NavLink></li>
                    <li><NavLink to="/find" className="tab-bar__tab" exact activeClassName="active">
                        <i className="fa fa-search"></i>
                        <span className="tab-bar__title">Find</span>
                    </NavLink></li>
                    <li><NavLink to="/more" className="tab-bar__tab" exact activeClassName="active">
                        <i className="fa fa-ellipsis-h"></i>
                        <span className="tab-bar__title">More</span>
                    </NavLink></li>
                </ul>
                
            </div>
        )
    }
    
}
