<template>
    <div>
        <div v-if="loading">
            Data is Loading...
        </div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row' + row">
                <div class="col" v-for="(bookable, column) in bookablesInRow(row)" :key="'row' + row + column">
                    <bookable-list-item :item-title="bookable.title" 
                                        :item-description="bookable.description" 
                                        :item-price="1000"
                                        ></bookable-list-item>
                </div>
                <div class="col" v-for="p in placeholdersInRow(row)" :key="'row' + row + p"></div>
            </div>
        </div>
    </div>
</template>
<script>

import BookableListItem from './BookableListItem.vue';
export default {
    components: {
        BookableListItem: BookableListItem
    },
    data(){
        return{

            bookables:null,
            loading: false,
            columns: 3
        }
    },
    computed:{
        rows (){

            return this.bookables == null ? 0 : Math.ceil(this.bookables.length/this.columns);

        }
    },
    methods:{
        bookablesInRow(row){
            
            return this.bookables.slice((row -1) * this.columns, row * this.columns);

        },
        placeholdersInRow(row){

            return this.columns - this.bookablesInRow(row).length;

        }
    },
    created(){

        // const p = new Promise((resolve,reject)=>{
        //     console.log(resolve);
        //     console.log(reject);

        //     setTimeout(()=>{
        //         resolve('hello');
        //     },3000)
        // }).then(result =>{
        //     console.log(`Success ${result}`)
        // }).catch(result =>{
        //     console.log(`Error ${result}`)
        // });

        // console.log(p);

        
        
        this.loading = true;

        const request = axios.get('/api/bookables').then(response =>{
            this.bookables = response.data;
            this.loading = false;
        });
        console.log(request);
        
        
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