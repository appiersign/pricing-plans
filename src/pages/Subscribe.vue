<template>
    <div>
        <div class="row mt-5">
            <div class="container mt-5">
                <h1 class="text-center">Payment</h1>
                <p class="text-center text-secondary mt-3">Complete the form below to subscribe to your plan!</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="container">
                <div v-if="error" class="alert alert-danger text-center">
                    something went wrong please try, please try again later!
                </div>
                <div class="row">
                    <div class="col-8 offset-2 card pt-5">
                        <form @submit.prevent="handlePayment">
                            <div class="form-group row">
                                <label for="full-name" class="col-sm-2 col-form-label">Full Name: </label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="full-name" placeholder="Mensah Saba" required v-model="payment.name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-sm-2 col-form-label">Email: </label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="email" placeholder="name@email.com" required v-model="payment.email">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="network" class="col-sm-2 col-form-label">Network: </label>
                                <div class="col-sm-10">
                                    <select name="network" id="network" class="form-control" required v-model="payment.network">
                                        <option value="">select network</option>
                                        <option value="mtn">mtn</option>
                                        <option value="airteltigo">airteltigo</option>
                                        <option value="vodafone">vodafone</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="number" class="col-sm-2 col-form-label">Number: </label>
                                <div class="col-sm-10">
                                    <input type="tel" class="form-control" id="number" placeholder="024XXXXXXX" required v-model="payment.number">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-8"></div>
                                <div class="col-sm-4">
                                    <button type="submit" class="btn btn-outline-success form-control">Pay</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Subscribe",
        data: function () {
            return {
                error: false,
                success: false,
                success_message: '',
                payment: {
                    name: '',
                    email: '',
                    network: '',
                    number: ''
                }
            };
        },
        methods: {
            handlePayment: function () {
                let form = new FormData;
                form.set('name', this.payment.name);
                form.set('email', this.payment.email);
                form.set('network', this.payment.network);
                form.set('number', this.payment.number);

                axios.post('/api/subscribe', form)
                .then(response => {
                    if (response.status !== 201) {
                        this.error = true;
                    } else {
                        this.success = true;
                        this.success_message = response.data.reason;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>