<template>
    <div>
        <div class="row">
            <div class="col-md-8 pb-4">
                <div v-if="!loading">
                    <div class="card">
                        <div class="card-body">
                            <h2>{{bookable.title}}</h2>
                            <hr>
                            <article>{{bookable.description}}</article>
                        </div>
                    </div>
                </div>
                <div v-if="loading">
                    Loading...
                </div>
            </div>
             <div class="col-md-4 pb-4">
                <availability :bookable-id = "this.$route.params.id"></availability>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <review-list :bookable-id = "this.$route.params.id"></review-list>
            </div>
        </div>
        
    </div>
</template>
<script>
import Availability from './Availability';
import ReviewList from './ReviewList.vue';

export default {

    // props:{
    //     bookableId
    // },
    components:{
        
        Availability,
        ReviewList
    
    },
    data(){
        return {
            bookable: null,
            loading: false
        }
    },
    created(){

        this.loading = true;
        console.log(this.$route.params.id);
        axios.get(`/api/bookables/${this.$route.params.id}`).then(response =>{
            this.bookable = response.data.data;
            this.loading = false;
        })
    }
}
</script>