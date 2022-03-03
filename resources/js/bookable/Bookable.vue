<template>
  <div>
    <div class="row">
      <div class="col-md-8 pb-4">
        <div v-if="!loading">
          <div class="card">
            <div class="card-body">
              <h2>{{ bookable.title }}</h2>
              <hr />
              <article>{{ bookable.description }}</article>
            </div>
          </div>
        </div>
        <div v-if="loading">Loading...</div>
      </div>
      <div class="col-md-4 pb-4">
        <availability
          :bookable-id="this.$route.params.id"
          @availability="checkPrice($event)"
          class="mb-4"
        ></availability>
        <div class="d-grid gap-2">
            <transition name="fade">
                <price-breakdown v-if="price" :price="price" class="mb-4"></price-breakdown>
            </transition>
            <transition name="fade">
                <button class="btn btn-outline-secondary btn-block" v-if="price" @click="addToBasket">Book Now</button>
            </transition>
        </div>
     </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <review-list :bookable-id="this.$route.params.id"></review-list>
      </div>
    </div>
  </div>
</template>
<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList.vue";
import PriceBreakdown from "./PriceBreakdown.vue";
import { mapState } from "vuex";

export default {
  // props:{
  //     bookableId
  // },
  components: {
    Availability,
    ReviewList,
    PriceBreakdown
  },
  data() {
    return {
      bookable: null,
      loading: false,
      price: null,
    };
  },
  created() {
    this.loading = true;
    console.log(this.$route.params.id);
    axios.get(`/api/bookables/${this.$route.params.id}`).then((response) => {
      this.bookable = response.data.data;
      this.loading = false;
    });
  },
  computed: {
    ...mapState({
      lastSearch: "lastSearch",
    }),
  },
  methods: {
    async checkPrice(hasAvailability) {
      if (!hasAvailability) {
        this.price = null;

        return;
      }

      try {
        this.price = (
          await axios.get(
            `/api/bookables/${this.bookable.id}/price?from=${this.lastSearch.from}&to=${this.lastSearch.to}`
          )
        ).data.data;
      } catch (error) {
        this.price = null;
      }
    },
    addToBasket(){
        this.$store.commit('addToBasket',{
            bookable:this.bookable,
            price:this.price,
            dates: this.lastSearch
        })
    }
  },
};
</script>