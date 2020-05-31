<template>
    <div class="flex items-center w-full font-medium text-base">
        <span class="mr-3 text-gray-500">Группировать:</span>
        <div class="inline-block relative w-full sorting-view-block">
            <select 
                class="w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none text-sm"
                v-model="typeGroup"
            >
                <option v-for="(item, index) in selectionOptions" :key="index">{{ item }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#2E2E2E" stroke-width="1.5"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            typeGroup: 'По дате',
            selectionOptions: [ "По дате", "По воpрастанию"]
        }
    }
}
</script>
<style scoped>
  .sorting-view-block select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
</style>