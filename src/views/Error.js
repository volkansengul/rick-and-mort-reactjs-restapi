import React from 'react';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {
    render() {
        return (
            <div className={'error'}>
                <h1>Ups !</h1>
                <p>Something went wrong! Please try again later.</p>
                <Link to={'/'} className={'tryit-btn'}>Try it now :)</Link>
            </div>
        )
    }
}