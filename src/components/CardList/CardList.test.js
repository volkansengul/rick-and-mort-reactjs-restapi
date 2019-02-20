import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import CardList from './index';
import Card from './Card';

const characterData = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    gender: 'Male',
    species: 'Human',
    origin: {name: 'Earth (C-137)'},
    location: {name: 'Earth (Replacement Dimension)'}
};

it('Character Card List Test', () => {
    const card = renderer.create(
        <Router>
            <CardList characters={[characterData]}/>
        </Router>
    ).toJSON();
    expect(card).toMatchSnapshot();
});

it('Character Card Test', () => {
    const card = renderer.create(
        <Router>
            <Card characterData={characterData}/>
        </Router>
    ).toJSON();
    expect(card).toMatchSnapshot();
});


it('Character Card Detail Section Test', () => {
    const card = renderer.create(
        <Router>
            <Card.Details characterData={characterData}/>
        </Router>
    ).toJSON();
    expect(card).toMatchSnapshot();
});