<template>
<div class="flex flex-row justify-between items-center bg-gray-400 rounded-lg">
    <button class="flex flex-row justify-between items-center border-solid border border-gray-300 bg-white rounded-lg py-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.72604 3.13324C2.19183 2.48031 2.65637 1.5 3.5 1.5H12.5C13.3436 1.5 13.8082 2.48031 13.274 3.13324L9.22604 8.08069C9.07986 8.25935 9 8.48308 9 8.71393V13.5C9 14.0523 8.55228 14.5 8 14.5C7.44772 14.5 7 14.0523 7 13.5V8.71393C7 8.48308 6.92014 8.25935 6.77396 8.08069L2.72604 3.13324ZM8 6.42081L10.3898 3.5H5.61024L8 6.42081Z" fill="#2E2E2E"/>
        </svg>
        <span class="mx-2 font-medium text-base">Фильтр</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#2E2E2E" stroke-width="1.5"/>
        </svg>
    </button>
    <div class="w-full">
        <Users />
    </div>
</div>
    
</template>
<script>
import Users from "./Users.vue"
export default {
    components: {
        Users
    }
    
}
</script>