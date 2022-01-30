<template>
    <div>
        <div class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{name:'home'}">Wei-BNB</router-link>
            <router-link class="btn nav-button" :to="{name:'bookable'}">Second</router-link>
        </div>
        <div class="container mt-4 mb-4 pr-4 pl-4">
            <router-view></router-view>
        </div>
    </div>
</template>