import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Detail from './Detail';

describe('Character detail page', () => {
    it('renders without crashing', () => {
        const episodeList = renderer.create(
            <Router>
                <Detail match={{
                    params: {
                        characterId: 1
                    }
                }}/>
            </Router>
        ).toJSON();
        expect(episodeList).toMatchSnapshot();
    });
});