import React from 'react';
import CardList from '../components/CardList';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Rick & Morty</h1>
                <CardList/>
            </div>
        )
    }
}