<template>
    <div>
        <bookable-list-item :item-title="bookable1.title" 
                            :item-content="bookable1.content" 
                            :item-price="1000"></bookable-list-item>

        <bookable-list-item :item-title="bookable2.title" 
                            :item-content="bookable2.content" 
                            :item-price="1500"></bookable-list-item>
    </div>
</template>
<script>

import BookableListItem from './BookableListItem.vue';
export default {
    components: {
        BookableListItem: BookableListItem
    },
    // beforeCreate(){
    //     console.log('before create');
    // },
    data(){
        return{
            bookable1:{
                title:'this is the new thing',
                content:'this is the new thing content',
            },
            bookable2:{
                title:'this is the new thing 2',
                content:'this is the new thing content 2',
            }
        }
    },
    created(){
        console.log(' created');
        console.log(this.bookable1);
        console.log(this.bookable2);

        setTimeout(()=>{
            this.bookable1.title = 'This is the edited title one';
            this.bookable2.title = 'This is the edited title 2';
        },5000);
    },
    // beforeMount(){
    //     console.log('before mount');
    // },
    // mounted(){
    //     console.log('mounted');
    // },
    // beforeUpdate(){
    //     console.log('before update');
    // },
    // updated(){
    //     console.log('updated');
    // },
    // beforeDestroy(){
    //     console.log('before destroy');
    // },
    // destroyed(){
    //     console.log('destroyed');
    // }
    
}
</script>