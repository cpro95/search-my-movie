import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './list';
import About from './about';
import Detail from './detail';

const Main = () => (
        <Switch>
            <Route exact path='/' component={List} />
            <Route path='/about' component={About} />
            <Route path='/:id' component={Detail} />
        </Switch>
)

export default Main;