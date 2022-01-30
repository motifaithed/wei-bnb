<template>
    <div>
        <div class="row">
            <div class="col-md-8">
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
            <div class="col-md-4">
                availability & price
            </div>
        </div>
    </div>
</template>
<script>
export default {
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