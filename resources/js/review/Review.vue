<template>
    <div>
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
</template>
<script>
export default {
    data(){

        return {
            review:{
            rating: 5,
            content: null
            }
        };
        
    },
    created(){
        //1. If review already exists(in reviews table id)
        //2. Fetch a booking by a review key
        //3. Store a review
    }
    // methods: {
    //     onRatingChanged(rating){
    //         console.log(rating);
    //     }
    // }
}
</script>