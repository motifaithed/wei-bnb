<template>
    <div>
        <bookable-list-item item-title="Deca Villa 1" item-content="this is deca villa 1" :item-price="1000"></bookable-list-item>
        <bookable-list-item item-title="Deca Villa 2" item-content="this is deca villa 2" :item-price="1500"></bookable-list-item>
    </div>
</template>
<script>

import BookableListItem from './BookableListItem.vue';
export default {
    components: {
        BookableListItem: BookableListItem
    },
    beforeCreate(){
        console.log('before create');
    },
    created(){
        console.log(' created');
    },
    beforeMount(){
        console.log('before mount');
    },
    mounted(){
        console.log('mounted');
    },
    // beforeUpdate(){
    //     console.log('before update');
    // },
    // updated(){
    //     console.log('updated');
    // },
    beforeDestroy(){
        console.log('before destroy');
    },
    destroyed(){
        console.log('destroyed');
    }
    
}
</script>