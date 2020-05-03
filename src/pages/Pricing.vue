<template>
    <div>
        <div class="row mt-5">
            <div class="container mt-5">
                <h1 class="text-center">Our Plans</h1>
                <p class="text-center text-secondary mt-3">Choose a plan that best fits your requirements!</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="container">
                <div class="row">
                    <router-link to="/subscribe" v-for="(plan, key) in plans" v-bind:key="key" class="col-4 no-decoration" v-bind:class="{'mt-5': key === 0 || key === 2}">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold text-danger text-center">{{ plan.name
                                    }}</h5>
                                <hr>
                                <div class="row">
                                    <div class="amount container text-center d-flex justify-content-center">
                                        <p class="align-self-start">GHS</p>
                                        <p class="d-flex align-self-center amount-figure align-items-center">
                                            {{ plan.amount }}</p>
                                        <p class="align-self-end" id="duration">/month</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="container text-center">
                                        <p v-for="(peck, key) in plan.pecks" v-bind:key="key">{{ peck }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pricing",
        data: function () {
            return {
                plans: []
            };
        },
        created() {
            fetch('/api/plans')
                .then(response => {
                    this.plans = JSON.parse(response._bodyText).plans;
                })
        }
    }
</script>

<style scoped>
.no-decoration {
    color: black;
    text-decoration: none;
}
</style>