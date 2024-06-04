<script>
// import { store } from '../store'
export default {
    name: 'CharacterList',
    props: {
        characters: Array
    }
    // data() {
    //     return{
    //         store,
    //     };
    // },
};
</script>

<template>
    <div>
        <ul v-if="characters.length > 0" class="row">
            <li v-for="character in characters" :key="character.id" class="col-md-3 col-sm-6 text-center mb-3">
            <img :src="character.image" alt="Immagine del peronaggio" class="rounded-circle">
            <h2>{{ character.name }}</h2>
            <p>{{ character.status }}</p>
            <p>{{ character.species }}</p>
            </li>
        </ul>
    </div>
</template>