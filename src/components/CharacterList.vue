<script>
import { store } from '../store'
export default {
    name: 'CharacterList',
    data() {
        return{
            store,
        };
    },
};
</script>

<template>
    <div>
        <ul>
            <li v-for="character in store.data" :key="character.id">{{ character.name }}</li>
        </ul>
    </div>
</template>