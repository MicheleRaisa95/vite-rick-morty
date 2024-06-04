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
        <ul v-if="characters.length > 0">
            <li v-for="character in characters" :key="character.id">
            <h2>{{ character.name }}</h2>
            <img :src="character.image" alt="Immagine del peronaggio">
            <p>{{ character.status }}</p>
            </li>
        </ul>
    </div>
</template>