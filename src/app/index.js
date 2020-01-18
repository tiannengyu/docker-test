import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

export default () => (
    <div>
        <Switch>
            {routes.map((item) => {
                return <Route {...item} key={item.component} />;
            })}
        </Switch>
    </div>
);
