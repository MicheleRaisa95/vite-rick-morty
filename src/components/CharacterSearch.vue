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
        <div class="row">
            <div class="col-md-3">
                <form>
                    <div class="mb-3">
                        <input class="form-control mb-3" id="searchCharacter" type="text" placeholder="Cerca personaggio" v-model="searchQuery" />
                <select class="form-select mb-3" id="selectStatus" v-model="searchStatus">
                <option value="">Tutti</option>
                <option value="Alive">Vivo</option>
                <option value="Dead">Morto</option>
                <option value="Unknown">Sconosciuto</option>
                </select>
                <button @click="onSearch" class="btn btn-primary">Cerca</button>
                <button @click="onReset" class="btn btn-secondary mx-3">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>