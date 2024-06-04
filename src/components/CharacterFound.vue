<script>
export default {
    name: 'CharacterFound',
    props: {
        characters: Array,
    },
    data() {
        return {
            filteredCharacters: [],
        };
    },
};
</script>

<template>
    <div>
        <p v-if="filteredCharacters.length > 0">
            Risultati trovati: {{ filteredCharacters.length }}
        </p>
    </div>
</template>