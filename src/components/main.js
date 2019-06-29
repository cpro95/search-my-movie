import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from '../routes/list';
import About from '../routes/about';
import Detail from '../routes/detail';

const Main = () => (
        <Switch>
            <Route exact path='/' component={List} />
            <Route path='/about' component={About} />
            <Route path='/:id' component={Detail} />
        </Switch>
)

export default Main;