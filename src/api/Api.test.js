import React from 'react';
import Api from './index';


describe('character api call', () => {
    it('should load single character data', () => {
        const api = new Api();
        return api.character(1)
            .then(data => {
                expect(data).toBeDefined();
                expect(data.id).toEqual(1);
                expect(data.name).toEqual('Rick Sanchez');
            })
    })
});


describe('characterList api call', () => {
    it('should load all characters data', () => {
        const api = new Api();
        return api.characterList()
            .then(data => {
                expect(data).toBeDefined();
                expect(data.results).toBeDefined();
                expect(data.results[0]).toBeDefined();
                expect(data.results[0].id).toEqual(1);
                expect(data.results[0].name).toEqual('Rick Sanchez');
            })
    })
});

describe('character\'s episodes api', () => {
    it('should load character episodes data', () => {
        const api = new Api();
        return api.episodes(1)
            .then(data => {
                expect(data).toBeDefined();
                expect(data.id).toEqual(1);
                expect(data.name).toEqual('Pilot');
                expect(data.episode).toEqual('S01E01');
            })
    })
});