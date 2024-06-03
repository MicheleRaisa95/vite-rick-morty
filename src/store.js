import { reactive } from 'vue';

export const store =reactive({
    data: [],

    meta: {},
    
    apiUrl: 'https://rickandmortyapi.com/api/character',
});