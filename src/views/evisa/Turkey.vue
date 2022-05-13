<template>
    <title>Turkey | E-Visa - Elfrique</title>
    <evisa-head/>

    <!---Onboard Screen--->
     <div  v-if="error" class=" alert-danger alert  alert-dismissible fade show" role="alert">
                {{error}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                {{message}} 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    <section class="onboard-screen">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="first-text">
                        <h1>Turkey</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos autem repudiandae quo impedit deleniti facere sint a nostrum odit iusto tempora saepe ullam, consequuntur reiciendis culpa nisi rem praesentium!</p>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6">
                    <div class="img-area first-img sec-img">
                        <img src="@/assets/images/map-turkey.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid call-to-action">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <p>
                        <span>Need E-Visa for Turkey? Apply Now! To Get Started.</span>
                        <a href="#evisa_form">Apply Now!</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!---Onboard Screen Ends--->

    <!---Description Note--->
    <section class="descriptionNote">
        <div class="container mb-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center text-area">
                    <h1>Description of Turkey E-Visa</h1>
                    <div class="line-rule"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic similique illo, accusantium natus provident laboriosam neque reiciendis et modi amet nam voluptatum dignissimos minus officiis debitis laudantium, dolore sint exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod ipsam ipsum qui odio beatae delectus officiis non, maxime vel natus officia eos! Numquam, hic ipsum nesciunt aliquid alias vel!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque et laboriosam magni quo minus, explicabo iusto nulla suscipit nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, eligendi.</p>
                </div>
            </div>
        </div>
        <div class="container pt-3 mb-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center text-area">
                    <h1>Cost & Features</h1>
                    <div class="line-rule"></div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="box-feat">
                        <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                        <h4>Education Visa</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veritatis mollitia.</p>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="box-feat">
                        <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                        <h4>Business Immigration</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veritatis mollitia.</p>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="box-feat">
                        <img src="@/assets/images/default-icon.png" ondragstart="return false;">
                        <h4>Spouse/Family Visa</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis veritatis mollitia.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-5" id="evisa_form">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="text-area text-center">
                        <h1>Provide Travel Info</h1>
                        <div class="line-rule"></div>
                        <p style="margin-top: -5px">Fill the form below to complete your travel info</p>
                    </div>
                    <form  name="form" @submit.prevent="submitEvisa" class="mt-2">
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <label>Full Name</label>
                                <input v-model="evisaDetails.fullname" type="text" placeholder="Enter fullname">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Depart Date</label>
                                <input v-model="evisaDetails.depart_date" type="date">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Return Date</label>
                                <input v-model="evisaDetails.return_date" type="date">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Visa Type</label>
                                <select v-model="evisaDetails.visa_type">
                                    <option hidden>Select Option</option>
                                    <option value="Temporary Worker">Temporary Worker</option>
                                    <option value="Tourism">Tourism</option>
                                </select>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Number of Travelers</label>
                                <input v-model="evisaDetails.numberOfTravelers" type="number" placeholder="Enter number">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Email</label>
                                <input v-model="evisaDetails.email" type="email" placeholder="Enter email address">
                            </div>
                            <div class="col-lg-6 mb-3">
                                <label>Phone Number</label>
                                <input v-model="evisaDetails.phone_number" type="tel" placeholder="Enter phone number">
                            </div>
                            <div class="col-lg-12 mb-3">
                                <label> Any Additional Information You Will Like to Share</label>
                                <textarea v-model="evisaDetails.additional_info"   cols="30" rows="4" placeholder="Start typing..."></textarea>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" :disabled="loading">Submit Details<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!---Description Note Ends--->

    <evisa-foot/>
</template>
<script>
    import Header from './evisa-head.vue'
    import Footer from './evisa-foot.vue'
    import EvisaService from '../../service/evisa.service'
    export default {
        name: "Elfrique",
        components:{
            'evisa-head':Header,
            'evisa-foot':Footer,
        },
        data() {
            return {
                evisaDetails: {
                    fullname: '',
                    depart_date: '',
                    return_date: '',
                    visa_type: '',
                    numberOfTravelers: '',
                    email: '',
                    phone_number: '',
                    additional_info: '',
                    destination: 'Turkey',
                },
                loading: false,
                error: '',
                methods: '',
            }},

            methods:{
                 resetform(){
                this.evisaDetails = {
                    fullname: '',
                    depart_date: '',
                    return_date: '',
                    visa_type: '',
                    numberOfTravelers: '',
                    email: '',
                    phone_number: '',
                    additional_info: '',
                    destination: 'Turkey',
                }
            },
        submitEvisa(){
            this.loading = true;
            EvisaService.submitEvisa(this.evisaDetails).then(response => {
                    
                    this.message = ` You are almost set! 
One of our Visa Consultants will be in contact with you shortly!. The number should be clickable that takes them to call immidiately
Meanwhile, you could as well call us on +234 906 141 2204 to hasten your request.`;
                    this.loading = false;
                    window.scrollTo(0,0)
                    this.resetform();

            },
            error => {
                console.log(error);
                this.error = error.response.data.message;
                console.log(error.response.data);


                this.loading = false;
                 window.scrollTo(0,0)
            });
        },

        },
        mounted(){
            window.scrollTo(0,0)

            //Copyright Date
            function newDate() {
            return new Date().getFullYear();
            }
            document.onload = document.getElementById("autodate").innerHTML = newDate();

        }
    }
</script>