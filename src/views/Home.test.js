import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Home from './Home';

it('Home page renders without crashing', () => {
    const episodeList = renderer.create(
        <Router>
            <Home/>
        </Router>
    ).toJSON();
    expect(episodeList).toMatchSnapshot();
});
