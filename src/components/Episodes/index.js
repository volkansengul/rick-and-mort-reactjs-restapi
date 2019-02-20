import React from 'react';
import Api from '../../api';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            episodeIdList: props.episodeIdList,
            episodes: null
        };
        this.api = new Api();
    }

    getEpisodeIdList() {
        if (this.state.episodeIdList !== null) {
            return this.state.episodeIdList.map((item) => {
                return item.replace('https://rickandmortyapi.com/api/episode/', '')
            });
        } else {
            return false;
        }
    }

    getEpisodes() {
        if (this.getEpisodeIdList()) {
            this.api.episodes(this.getEpisodeIdList()).then(resp => {
                let episodeList = Array.isArray(resp) ? resp.sort()
                    .reverse()
                    .slice(0, (this.props.limit ? this.props.limit : 5)) : [resp];
                const episodes = episodeList.map((item, i) => {
                    return (
                        <div key={'episode_' + i} className={'episode'}>
                            <h3>{item.name} <i>({item.episode})</i></h3>
                            <span className={'episode-air-date'}>{item.air_date}</span>
                            <div className={'clear'}/>
                        </div>
                    )
                });
                this.setState({
                    episodes: episodes
                });
            })
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.episodeIdList !== null) {
            return {episodeIdList: nextProps.episodeIdList};
        } else {
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.episodeIdList !== this.state.episodeIdList) {
            this.getEpisodes();
        }
    }


    render() {
        return (
            <div className={'episodes'}>
                <h3 className={'title'}>Last 5 Episodes</h3>
                {this.state.episodes}
            </div>
        )
    }
}