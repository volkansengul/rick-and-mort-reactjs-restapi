export default class Api {

    /**
     *
     * @param endPoint
     * @returns {Promise<Response | {errors: any}>}
     */
    callApi = async (endPoint) => {
        return await(fetch(endPoint)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(errors => {
                    return {
                        errors: errors
                    };
                })
        );
    };

    /**
     *
     * @param endPoint
     * @returns {Promise<Response|{errors: any}>}
     */
    characterList(endPoint = 'https://rickandmortyapi.com/api/character') {
        return this.callApi(endPoint)
    }

    /**
     *
     * @param characterId
     * @returns {Promise<Response|{errors: any}>}
     */
    character(characterId) {
        return this.callApi('https://rickandmortyapi.com/api/character/' + characterId);
    }

    /**
     *
     * @param episodeId
     * @returns {Promise<Response|{errors: any}>}
     */
    episodes(episodeId) {
        return this.callApi('https://rickandmortyapi.com/api/episode/' + episodeId);
    }
}
