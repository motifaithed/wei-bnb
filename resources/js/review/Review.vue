<template>
    <div>
        <div class="form-group mb-4">
            <label class="text-muted">Select the star rating (1 is worst - 5 is the best)</label>
            <review-rating :rating="5" class="fa-3x" v-on:rating:changed="review.rating = $event"></review-rating>
        </div>
        <div class="form-group mb-4">
            <label for="content" class="text-muted">Describe your experience with</label>
            <textarea name="content" cols="30" rows="10" class="form-control"></textarea>
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
    // methods: {
    //     onRatingChanged(rating){
    //         console.log(rating);
    //     }
    // }
}
</script>