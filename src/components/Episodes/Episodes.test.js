import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Episodes from './index';

const episodes = [
    {
        name: 'Rest and Ricklaxation',
        episode: '(S03E06)',
        air_date: 'August 27, 2017'
    },
    {
        name: 'The Ricklantis Mixup',
        episode: '(S03E07)',
        air_date: 'September 10, 2017'
    }
];

it('Character Episode List Test', () => {
    const episodeList = renderer.create(
        <Router>
            <Episodes episodeIdList={episodes} limit={2}/>
        </Router>
    ).toJSON();
    expect(episodeList).toMatchSnapshot();
});
