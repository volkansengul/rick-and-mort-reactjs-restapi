import React from 'react';
import {Link, Redirect} from "react-router-dom";
import Card from '../components/CardList/Card';
import Episodes from "../components/Episodes";

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            character: undefined
        };
        this.characterId = parseInt(props.match.params.characterId);
    }

    characterReady = (data) => {
        this.setState({
            character: data
        })
    }


    render() {
        const redirect = (this.characterId === undefined  || isNaN(this.characterId)) ?<Redirect to="/error" push/> : null;
        return (
            <div>
                {redirect}
                <div className={'go-back-container'}>
                    <Link to={'/'} className={'go-back'}>&laquo; Go Back</Link>
                </div>
                <div className={'clear'}/>
                <div className="container">
                    <Card characterId={this.characterId}
                          callback={this.characterReady}>
                        <Card.Details/>
                    </Card>
                    <div className={'episodes-container'}>
                        <Episodes
                            episodeIdList={this.state.character ? this.state.character.episode : null}
                            limit={5}/>
                    </div>
                </div>
            </div>

        )
    }
}