<template>
    <div>
        <bookable-list-item v-if ="bookable1"
                            :item-title="bookable1.title" 
                            :item-content="bookable1.content" 
                            :item-price="1000"></bookable-list-item>

        <bookable-list-item v-if="bookable2"
                            :item-title="bookable2.title" 
                            :item-content="bookable2.content" 
                            :item-price="1500"></bookable-list-item>
        
        <bookable-list-item v-if="bookable3"
                            :item-title="bookable3.title" 
                            :item-content="bookable3.content" 
                            :item-price="2000"></bookable-list-item>
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
            bookable1:null,
            bookable2:null,
            bookable3:null
        }
    },
    created(){
        
        setTimeout(()=>{
          this.bookable1 = {
              title: 'This is the Edited One',
              content: 'This is the edited content'
          }
          this.bookable2 = {
              title: 'This is the Edited Two',
              content: 'This is the edited content Two'
          }
          this.bookable3 = {
              title: 'This is the Edited Three',
              content: 'This is the edited content Three'
          }
        },2000);

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