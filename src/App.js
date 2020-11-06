import React from 'react'
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Friends from './routes/Friends';
import Chats from './routes/Chats';
import More from './routes/More';
import Find from './routes/Find';
import Navigation from './components/Navigation';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Friends} />
            <Route path="/chats" component={Chats} />
            <Route path="/more" component={More} />
            <Route path="/find" component={Find} />
        </HashRouter>
    )
}

export default App
