import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import routes from '../src/app/routes';
import App from '../src/app';

const app = express();

app.get('/*', (req, res) => {
    const currentRoute = routes.find(route => matchPath(req.url, route)) || {};
    const promise = currentRoute.fetchData ? currentRoute.fetchData() : Promise.resolve(null);

    promise.then((data) => {
        const context = {
            data,
        };
        const renderedString = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        );

        fs.readFile(path.resolve('dist/index.html'), 'utf8', (error, fsData) => {
            if (error) {
                res.send('<p>Server Error</p>');
                return false;
            }

            res.send(fsData.replace(
                '<div id="app"></div>',
                `<div id="app">${renderedString}</div><script>window.__ROUTE_DATA__ = ${JSON.stringify(data)}</script>`));
            return false;
        });
    }).catch(() => {});
});

app.listen(5555);
