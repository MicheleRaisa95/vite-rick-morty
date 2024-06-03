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
        };
    },
    created() {
        console.log('chiama api');

        axios.get(this.store.apiUrl).then((response) => {
            this.store.data = response.data.data;
            this.store.meta = response.data.meta;
        });
    },
};
</script>

<template>
    <div class="container">
        <CharacterSearch />
        <CharacterList />
        <CharacterFound />
    </div>
</template>

