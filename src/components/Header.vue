<template>
    <div>
        <div class="inline-block w-48">
            <DatePickers/>
        </div>
        <div class="inline-block ml-5 w-1/3">
            <Search />
        </div>
        <div class="inline-block float-right w-1/3">
            <FilterOptions />
        </div>
    </div>
</template>
<script>
import DatePickers from "../components/DatePickers.vue";
import Search from "../components/Search.vue"
import FilterOptions from "../components/FilterOptions.vue"

export default {
    components: {
        DatePickers,
        Search,
        FilterOptions
    }
}
</script>