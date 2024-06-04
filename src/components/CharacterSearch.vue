<script>
export default {
    name: 'CharacterSearch',
    data() {
        return {
            searchQuery: '',
            searchStatus: '',
        };
    },
    methods: {
        onSearch() {
            this.$emit('search', this.searchQuery, this.searchStatus);
        },
        onReset() {
            this.searchQuery = '';
            this.searchStatus = '';
            this.$emit('resetSearch')
        },
    },
};
</script>

<template>
    <div>
        <div class="search-bar">
            <input type="text" placeholder="Cerca personaggio" v-model="searchQuery" />
            <select v-model="searchStatus">
            <option value="">Tutti</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Morto</option>
            <option value="Unknown">Sconosciuto</option>
            </select>
            <button @click="onSearch">Cerca</button>
            <button @click="onReset">Reset</button>
        </div>
    </div>
</template>