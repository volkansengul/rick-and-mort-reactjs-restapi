import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Error from './Error';

it('Error page renders without crashing', () => {
    const episodeList = renderer.create(
        <Router>
            <Error/>
        </Router>
    ).toJSON();
    expect(episodeList).toMatchSnapshot();
});
