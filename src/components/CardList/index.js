import React from 'react';
import {Redirect} from 'react-router-dom';
import Api from '../../api';
import Card from './Card';

export default class CardList extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            loading: true,
            currentPage: 0,
            nextPage: undefined,
            errors: false
        };
        this.api = new Api();
    }

    nextPage() {
        this.api.characterList(this.state.nextPage).then(resp => {
                if (resp.errors !== undefined) {
                    this.setState({
                        errors: resp.errors
                    });
                } else {
                    const currentData = this.state.characters;
                    const newData = currentData.concat(resp.results);
                    this.setState({
                        characters: newData,
                        loading: false,
                        nextPage: resp.info.next
                    })
                }

            }
        );

    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 250)
            && this.state.loading === false && this.state.nextPage.length > 0
        ) {
            this.setState({
                loading: true
            }, this.nextPage());
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.nextPage();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {
        const redirect = (this.state.errors !== false) ? <Redirect to="/error" push/> : null;
        const preloader = (this.state.loading) ? <div className="loading"/> : '';
        const characterCards = this.state.characters.map((item, i) => {
            return <Card key={'chracter_card_' + i} characterData={item}/>
        });
        return (
            <div className="container" ref={'container'}>
                {characterCards}
                {preloader}
                {redirect}
            </div>
        )
    }
}