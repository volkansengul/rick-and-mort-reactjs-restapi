import React from 'react';
import {Link} from "react-router-dom";
import Api from '../../api';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: props.characterData,
            loading: false
        };
        this.api = new Api();
    }

    componentDidMount() {
        if (!this.props.characterData && this.props.characterId) {
            this.api.character(this.props.characterId).then(resp => {
                    this.setState({
                        character: resp,
                        loading: false
                    });
                    this.props.callback(resp);
                }
            );
        }
    }
    
    ready() {
        const children = this.props.children ? React.cloneElement(this.props.children, {characterData: this.state.character}) : null;
        return (
            <div className={'character-card' + (this.props.children ? ' detailed' : '')}>
                <Link to={'/detail/' + this.state.character.id}>
                    <img src={this.state.character.image}/>
                    <div>{this.state.character.name}</div>
                </Link>
                {children}
            </div>
        )
    }

    loading() {
        return <div className="loading"/>
    }

    render() {
        return this.state.character ? this.ready() : this.loading()
    }


}

class CardDetails extends React.Component {
    render() {
        return (
            <ul className={'character-card-detail'}>
                <li>
                    <span className={'caption'}> STATUS:</span>
                    <span>{this.props.characterData.status}</span>
                </li>
                <li>
                    <span className={'caption'}> SPECIES:</span>
                    <span>{this.props.characterData.species}</span>
                </li>
                <li>
                    <span className={'caption'}> GENDER:</span>
                    <span>{this.props.characterData.gender}</span>
                </li>
                <li>
                    <span className={'caption'}> ORIGIN:</span>
                    <span>{this.props.characterData.origin.name}</span>
                </li>
                <li>
                    <span className={'caption'}> LAST LOCATION:</span>
                    <span>{this.props.characterData.location.name}</span>
                </li>
            </ul>
        )
    }
}

Card.Details = CardDetails;

export default Card;