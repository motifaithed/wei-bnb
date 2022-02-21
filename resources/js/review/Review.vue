<template>
    <div>
        <div class="row">
            <div :class="[{'col-md-4': isLoading || !alreadyReviewed},{'d-none': !isLoading && alreadyReviewed }]">
                <div class="card">
                    <div class="card-body">
                        <div v-if="isLoading">
                            Loading...
                        </div>
                        <div v-else>
                            <p>
                                You stayed at <router-link :to="{name:'bookable', params:'id:booking.bookable.bookable_id'}">{{booking.bookable.title}}</router-link>
                            </p>
                            <p>From {{booking.from}} to {{booking.to}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="[{'col-md-8': isLoading || !alreadyReviewed},{'col-md-12': !isLoading && alreadyReviewed}]">
                <div v-if="isLoading">
                    Loading...
                </div>
                <div v-else>
                    <div v-if="alreadyReviewed">
                    <h3>This booking was already reviewed!</h3>
                    </div>
                    <div v-else>
                        <div class="form-group mb-4">
                            <label class="text-muted">Select the star rating (1 is worst - 5 is the best)</label>
                            <review-rating class="fa-3x" v-model="review.rating"></review-rating>
                        </div>
                        <div class="form-group mb-4">
                            <label for="content" class="text-muted">Describe your experience with</label>
                            <textarea name="content" cols="30" rows="10" class="form-control" v-model="review.content"></textarea>
                        </div>
                        <div class="row">
                            <button class="btn btn-lg btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){

        return {
            review:{
            rating: 5,
            content: null
            },
            existingReview:null,
            isLoading: false,
            booking: null
        };
        
    },
    created(){
        this,this.isLoading = true;
        //1. If review already exists(in reviews table id)
        axios.get(`/api/reviews/${this.$route.params.id}`)
             .then(response =>{
                 this.existingReview = response.data.data;
           }).catch(error =>{
               if(error.response && error.response.status && error.response.status == 404){
                    //2. Fetch a booking by a review key
                   return axios.get(`/api/booking-by-review/${this.$route.params.id}`)
                               .then(response =>{
                                   this.booking = response.data.data;
                               })
               }
           }).then(()=>{
                 this.isLoading = false;
           });
       
        //3. Store a review
    },
    computed:{
         alreadyReviewed(){
            return this.hasReview || !this.booking;
        },  
        hasReview(){
            return this.existingReview != null;
        },
        hasBooking(){
            return this.booking != null;
        }
    }
    // methods: {
    //     onRatingChanged(rating){
    //         console.log(rating);
    //     }
    // }
}
</script>