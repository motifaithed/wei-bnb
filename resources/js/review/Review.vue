<template>
  <div>
    <div>
      <fatal-error v-if="errorCheck"></fatal-error>
      <div class="row" v-else>
        <div :class="[{ 'col-md-4': twoColumns }, { 'd-none': oneColumn }]">
          <div class="card">
            <div class="card-body">
              <div v-if="isLoading">Loading...</div>
              <div v-if="hasBooking">
                <p>
                  You stayed at
                  <router-link
                    :to="{
                      name: 'bookable',
                      params: 'id:booking.bookable.bookable_id',
                    }"
                    >{{ booking.bookable.title }}</router-link
                  >
                </p>
                <p>From {{ booking.from }} to {{ booking.to }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="[
            { 'col-md-8': twoColumns || !alreadyReviewed },
            { 'col-md-12': oneColumn },
          ]"
        >
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-if="alreadyReviewed">
              <h3>This booking was already reviewed!</h3>
            </div>
            <div v-else>
              <div class="form-group mb-4">
                <label class="text-muted"
                  >Select the star rating (1 is worst - 5 is the best)</label
                >
                <review-rating
                  class="fa-3x"
                  v-model="review.rating"
                ></review-rating>
              </div>
              <div class="form-group mb-4">
                <label for="content" class="text-muted"
                  >Describe your experience with</label
                >
                <textarea
                  name="content"
                  cols="30"
                  rows="10"
                  class="form-control"
                  v-model="review.content"
                  :class="[{ 'is-invalid': this.errorFor('content') }]"
                ></textarea>
                <div
                    class="invalid-feedback"
                    v-for="(error, index) in this.errorFor('content')"
                    :key="'content' + index"
                    >
                    {{ error }}
                </div>
              </div>
              <div class="row">
                <button
                  class="btn btn-lg btn-primary btn-block"
                  @click.prevent="submit"
                  :disabled="sending"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { is404, is422 } from "../shared/utils/response";

export default {
  data() {
    return {
      review: {
        id: null,
        rating: 5,
        content: null,
      },
      existingReview: null,
      isLoading: false,
      booking: null,
      errorCheck: false,
      errors: null,
      sending: false
    };
  },
  created() {
    this.review.id = this.$route.params.id;
    this, (this.isLoading = true);
    //1. If review already exists(in reviews table id)
    axios
      .get(`/api/reviews/${this.review.id}`)
      .then((response) => {
        this.existingReview = response.data.data;
      })
      .catch((error) => {
        if (is404(error)) {
          //2. Fetch a booking by a review key
          return axios
            .get(`/api/booking-by-review/${this.review.id}`)
            .then((response) => {
              this.booking = response.data.data;
            })
            .catch((error) => {
              this.errorCheck = !is404(error);
              //    is404(error) ? {} : (this.errorCheck = true);
              //    if(!is404(error)){
              //        this.errorCheck = true;
              //    }
            });
        }
      })
      .then(() => {
        this.isLoading = false;
      });
  },
  computed: {
    alreadyReviewed() {
      return this.hasReview || !this.booking;
    },
    hasReview() {
      return this.existingReview != null;
    },
    hasBooking() {
      return this.booking != null;
    },
    oneColumn() {
      return !this.isLoading && this.alreadyReviewed;
    },
    twoColumns() {
      return this.isLoading || !this.alreadyReviewed;
    },
  },
  methods: {
    submit() {
      //3. Store a review
      this.sending = true;
      this.errors - null;
      return axios
        .post(`/api/reviews/`, this.review)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
           
          if (is422(error)) {
            const errors = error.response.data.errors;
            if (errors["content"] && _.size(errors)) {
              this.errors = errors;
               console.log('its here');
              return;
            }
          }

          this.errorCheck = true;
         
        })
        .then(() => {
          this.sending = false;
        });
    },
    errorFor(field) {
      return null != this.errors && this.errors[field] ? this.errors[field] : null;
    }
  },
  // methods: {
  //     onRatingChanged(rating){
  //         console.log(rating);
  //     }
  // }
};
</script>
