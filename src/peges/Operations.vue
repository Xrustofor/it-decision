<template>
<div>
    <div class="my-6">
        <img src="../../public/money-move.jpg" alt="">
    </div>
    <div class="mt-10">
        <div class="inline-block w-1/4">
            <SortingView />
        </div>
        <div class="inline-block w-1/4 ml-6">
            <TypeViewSelection />
        </div>
        <div class="inline-block float-right w-auto">
            <GroupbyOperations />
        </div>
    </div>
    <DataTable 
        :items = items
        :text="'Сегодня, 10 июля'"
        @input="remove"
    />
    <DataTable 
        :items = items
        :text="'Вчера, 9 июля'"
        @input="remove"
    />
</div>

</template>
<script>
import SortingView from "../components/SortingView.vue";
import TypeViewSelection from "../components/TypeViewSelection.vue";
import GroupbyOperations from "../components/GroupbyOperations.vue";
import DataTable from "../components/DataTable.vue"

export default {
    components: {
        SortingView,
        TypeViewSelection,
        GroupbyOperations,
        DataTable
    },
    computed: {
        items() {
            //return this.$store.commit('setItems');
            return this.$store.getters.getItems;
        }
    },
    methods: {
        remove(val) {
            this.$store.dispatch('removeItem', val);
        }
    }
}
</script>