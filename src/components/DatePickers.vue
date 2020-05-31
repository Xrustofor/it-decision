<template>
    <div>
        <div class="flex flex-row items-center justify-between items-center h-10 w-full">
            <button 
                @click="prev"
                :disabled="prevDisabled"
                class="border border-grey-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded h-full"
                :class="prevDisabled ? 'opacity-50 cursor-not-allowed' : ''"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                    <path d="M6 1L2 5L6 9" stroke="#2E2E2E" stroke-width="2"/>
                </svg>
            </button>
            <div class="flex items-center justify-center border-solid border border-gray-300 rounded w-24 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C4.44772 7 4 6.51785 4 5.92308L4 5C3.44772 5 3 5.44772 3 6V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6C13 5.44772 12.5523 5 12 5V5.92308C12 6.51785 11.5523 7 11 7C10.4477 7 10 6.51785 10 5.92308V5H6V5.92308C6 6.51785 5.55228 7 5 7ZM10 3H6V2.07692C6 1.48215 5.55228 1 5 1C4.44772 1 4 1.48215 4 2.07692L4 3C2.34315 3 1 4.34315 1 6V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V6C15 4.34315 13.6569 3 12 3V2.07692C12 1.48215 11.5523 1 11 1C10.4477 1 10 1.48215 10 2.07692V3Z" fill="#2E2E2E"/>
                </svg>
                <span class="ml-2 font-medium text-base">{{ viewMonth }}</span>
            </div>
            <button 
                @click="next"
                :disabled="nextDisabled"
                class="border border-grey-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded px-3 py-3 h-full"
                :class="nextDisabled ? 'opacity-50 cursor-not-allowed' : ''"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
                    <path d="M1 9L5 5L1 1" stroke="#2E2E2E" stroke-width="2"/>
                </svg>
            </button>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            months: ['Январь', 'Февраль‎', 'Март‎', 'Апрель‎', 'Май', 'Июнь‎', 'Июль‎', 'Август', 'Сентябрь‎', 'Октябрь‎', 'Ноябрь‎', 'Декабрь‎'],
            count: 0,
            prevDisabled: true,
            nextDisabled: false
        }
    },
    computed: {
        viewMonth() {
            return this.months[this.count];
        }
    },
    methods: {
        prev(){
            this.count != 0 ? this.count-- : this.prevDisabled = true;
        },
        next(){
            this.count++
        }
    },
    watch: {
        count(value){
            value == 0 ?  this.prevDisabled = true : this.prevDisabled = false;
            value >= 11 ?  this.nextDisabled = true : this.nextDisabled = false
        },
    }
}
</script>