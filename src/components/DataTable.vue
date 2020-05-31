<template>
  <div class="mt-5">
    <div class="flex w-full items-center justify-between mt-5 mb-3 font-medium">
        <button class="flex flex items-center focus:outline-none">
            <span class="mr-2 text-xl">{{ text }}</span>
            <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#B2B2B2" stroke-width="2"/>
            </svg>
        </button>
        <button class="flex items-center justify-between focus:outline-none">
            <span class="mr-2 text-13 text-gray-600 hover:text-black text-sm">Добавить</span>
            <div class="flex items-center justify-center overflow-hidden rounded-full h-8 w-8 bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.23077C4 9.6556 4.44772 10 5 10C5.55229 10 6 9.6556 6 9.23077V6H9.23077C9.6556 6 10 5.55228 10 5C10 4.44772 9.6556 4 9.23077 4H6V0.769231C6 0.344396 5.55228 0 5 0C4.44771 0 4 0.344396 4 0.769231L4 4H0.769231C0.344396 4 0 4.44772 0 5C0 5.55228 0.344396 6 0.769231 6H4L4 9.23077Z" fill="#B2B2B2"/>
                </svg>
            </div>
        </button>
    </div>
    <hr class="mt-y" />
      <div 
        class="flex justify-between items-center hover:bg-gray-200  hover:shadow cursor-pointer py-4 relative z-20 font-normal"
        v-for="item in items" 
        :key="`data-${item.id}`"
        @click="remove(item.id)"
      >
        <div v-if="item.rise" class="w-10 py-1 px-1">
            <div class="float-left flex justify-center items-center w-8 h-8 bg-green-100 rounded-md ">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31228 3.23716C7.68952 3.60584 7.68952 4.21272 7.31228 4.5814C6.94709 4.93831 6.36372 4.93831 5.99853 4.5814L4.95077 3.55741L4.95077 11.0492C4.95077 11.5743 4.5251 12 4 12C3.4749 12 3.04923 11.5743 3.04923 11.0492L3.04923 3.55741L2.00147 4.5814C1.63628 4.93831 1.05291 4.93831 0.687718 4.5814C0.31048 4.21272 0.31048 3.60584 0.687717 3.23716L3.30105 0.683098C3.68964 0.303325 4.31036 0.303325 4.69895 0.683098L7.31228 3.23716Z" fill="#167951"/>
                </svg>
            </div>
        </div>
        <div v-else class="w-10 py-1 px-1">
            <div class="float-left flex justify-center items-center w-8 h-8 bg-orange-200 rounded-md ">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.687718 8.76284C0.31048 8.39416 0.31048 7.78728 0.687718 7.4186C1.05291 7.06169 1.63628 7.06169 2.00147 7.4186L3.04923 8.44259L3.04923 0.950771C3.04923 0.425675 3.4749 -1.51893e-07 4 -1.74846e-07C4.5251 -1.97798e-07 4.95077 0.425674 4.95077 0.950771L4.95077 8.44259L5.99853 7.4186C6.36372 7.06169 6.94709 7.06169 7.31228 7.4186C7.68952 7.78728 7.68952 8.39416 7.31228 8.76284L4.69895 11.3169C4.31036 11.6967 3.68964 11.6967 3.30105 11.3169L0.687718 8.76284Z" fill="#E04F1A"/>
                </svg>
            </div>
        </div>
        <div class="w-1/3 pl-3 font-normal">
            <p class="text-tiny">{{ item.name }}</p>
            <p class="text-xs">
                <span class="text-gray-500">Со счёта:</span> {{ item.bankName }}
            </p>
        </div>
        <div class="w-1/4 font-normal" >
            <p class="text-tiny">{{ item.payment }}</p>
            <span class="text-gray-500 text-xs">{{ item.typeWork }}</span>
        </div>
        <div class="w-1/4 font-normal text-tiny">
            <p>{{ item.typePayment }}</p>
        </div>
        <div class="flex justify-center items-center w-48 font-medium text-xs">
            <span
                class="py-1 px-2 rounded-md"
                :class="item.status ? 'bg-green-200 text-green-500' : 'bg-orange-200 text-orange-500'"
            >
                {{ item.status ? 'Оплачено' : 'Не оплачено' }}
            </span>
        </div>
        <div class="flex justify-center items-center w-32 font-medium text-base">
            <p :class="item.amount[0] == '-' ? 'text-orange-500' : 'text-green-500'">{{ item.amount }} ₴</p>
        </div>
      </div>
      <div 
        class="flex justify-center items-center relative z-0 mt-2"
        v-if="items.length != 0"
      >
          <hr class="border-md z-0 absolute  w-full text-gray" />
          <div class="flex items-center justify-center cursor-pointer z-10 bg-white px-6">
            <span class="mr-3 font-medium text-xs  text-gray-500">Копировать операцию</span>
            <div class="flex items-center justify-center rounded-full h-8 w-8 bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3L3 11H5.5H8V13H5.5H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H5.5H8C9.10457 1 10 1.89543 10 3H8H5.5H3Z" fill="#7F7F7F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5H8L8 13H13V5ZM8 3C6.89543 3 6 3.89543 6 5V13C6 14.1046 6.89543 15 8 15H13C14.1046 15 15 14.1046 15 13V5C15 3.89543 14.1046 3 13 3H8Z" fill="#7F7F7F"/>
                </svg>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        items: Array,
        text: String
    },
    methods: {
        remove(id){
            this.$emit('input', id);
        }
    }
}
</script>

<style>

</style>