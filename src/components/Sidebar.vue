<template>
    <div class="py-5 bg-gray-100 h-full flex flex-col justify-between">
        <div>
            <div class="flex justify-between mb-2 px-6">
                <h2 class="text-base text-xl font-semibold font-medium text-base">Все деньги</h2>
                <img src="../assets/images/logo.svg" alt="">
            </div>
            <div class="px-6">
                <AllAccount />
            </div>
            <div class="px-6">
                <Navbar />
            </div>
        </div>
        <div>
            <User />
        </div>
    </div>
</template>
<script>
import AllAccount from "../components/AllAccount.vue"
import Navbar from "../components/Navbar.vue"
import User from "../components/User.vue"
export default {
    components:{
        AllAccount,
        Navbar,
        User
    }
    
}
</script>