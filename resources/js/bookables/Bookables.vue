<template>
    <div>
        <div v-if="loading">
            Data is Loading...
        </div>
        <div v-else>
            <bookable-list-item  v-for="(bookable,index) in bookables"
                                :key = "index"
                                :item-title="bookable.title" 
                                :item-content="bookable.content" 
                                :item-price="1000"
                                ></bookable-list-item>
        </div>
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

            bookables:null,
            loading: false,
            column: 3
        }
    },
    computed:{
        rows (){

            return this.bookables == null ? 0 : Math.ceil(this.bookables.length/this.column);

        }
    },
    created(){
        this.loading = true;
        setTimeout(()=>{
          this.bookables = [{
              title: 'This is the Edited One',
              content: 'This is the edited content'
          },
          {
              title: 'This is the Edited Two',
              content: 'This is the edited content Two'
          },
          {
              title: 'This is the Edited Three',
              content: 'This is the edited content Three'
          },
          {
              title: 'This is the Edited Three',
              content: 'This is the edited content Three'
          },
          {
              title: 'This is the Edited Three',
              content: 'This is the edited content Three'
          },
          {
              title: 'This is the Edited Three',
              content: 'This is the edited content Three'
          },
          {
              title: 'This is the Edited Three',
              content: 'This is the edited content Three'
          }]
          this.loading = false;
          
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