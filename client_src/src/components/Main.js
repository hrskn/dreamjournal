import React from 'react';
import { Switch, Route} from 'react-router-dom';
import AddDream from './AddDream';
import Dreams from './Dreams';
import Dream from './Dream';
import EditDream from './EditDream';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Dreams}/>
            <Route exact path='/dreams/add' component={AddDream}/>
            <Route exact path='/dreams/edit/:id' component={EditDream}/>
            <Route exact path='/dreams/:id' component={Dream}/>
        </Switch>
    </main>
)
export default Main;