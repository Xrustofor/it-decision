<template>
    <ul class="flex items-center font-medium text-base">
        <li v-for="(item, index) in operations" :key="index">
            <button 
                @click="selectId = item.id"
                class="ml-2 px-4 py-2 text-gray-600 font-normal border-solid border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-300"
                :class="selectId == item.id ? 'bg-gray-300 text-st' : ''"
            >
                {{ item.title }}
            </button>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            operations: [
                {
                    id: 0,
                    title: "Все операции"
                },
                {
                    id: 1,
                    title: "Будущие"
                },
                {
                    id: 2,
                    title: "Прошедшие"
                }
            ],
            selectId: 0,            
        }
    }
}
</script>