<script>
import CharacterSearch from './CharacterSearch.vue';
import CharacterList from './CharacterList.vue';
import CharacterFound from './CharacterFound.vue';
import { store } from '../store';
import axios from 'axios';


export default {
    name: 'MainComponent',
    components: {
        CharacterSearch,
        CharacterList,
        CharacterFound,
    },
    data() {
        return {
            store,
            filteredCharacters: [],
        };
    },
    created() {
        console.log('chiama api');

        axios.get(this.store.apiUrl).then((response) => {
            this.store.data = response.data.results;
            this.store.meta = response.data.info;
            this.filteredCharacters = this.store.data.slice()
        });
    },
    methods: {
        onSearch(searchQuery, searchStatus) {
            this.filteredCharacters = this.store.data.filter((character) => {
                const matchName = character.name.toLowerCase().includes(searchQuery.toLowerCase());
                const matchStatus = searchStatus === '' || character.status === searchStatus; 
                return matchName && matchStatus;
            });
        },
        onResetSearch() {
            this.filteredCharacters = this.store.data.slice();
        },
    },
};
</script>

<template>
    <div class="container">
        <CharacterSearch @search="onSearch" @resetSearch="onResetSearch" />
        <CharacterList :characters="filteredCharacters"/>
        <CharacterFound />
    </div>
</template>

