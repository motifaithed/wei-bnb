<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability</h6>
        <div class="row g-2 mb-4">
            <div class="form-group col-md-6">
                <label for="from">From</label>
                <input type="text" 
                       name="from" 
                       class="form-control form-control-sm" 
                       placeholder="Start Date" 
                       v-model="from"
                       v-on:keyup.enter="check" >
                
            </div>
            <div class="form-group col-md-6">
            <label for="to">To</label>
               <input type="text" 
                       name="to" 
                       class="form-control form-control-sm" 
                       placeholder="End Date" 
                       v-model="to"
                       v-on:keyup.enter="check" >
            </div>
        </div>
        <div class="d-grid gap-2">
            <button class="btn btn-secondary" v-on:click="check">Check!</button>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){

        return {

            from: null,
            to: null
        } 
    },
    methods:{
        check(){

            alert('button was pressed');
        }
    }
}
</script>
<style scoped>
    label{
        font-size: 0.7rem;
        text-transform: uppercase;
        color: gray;
        font-weight: bolder;
    }
</style>