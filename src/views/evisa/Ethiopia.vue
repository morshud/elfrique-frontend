<template>
    <title>Ethiopia | E-Visa - Elfrique</title>
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
                        <h1>Ethiopia e-Visa </h1>
                        <p>Get your Ethiopia e-Visa
with Elfrique and enter Ethiopia
legally.
</p>
<a href="#evisa_form" class="btnApply">Apply Now!</a>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6">
                    <div class="img-area first-img sec-img">
                        <img src="@/assets/images/map-ethiopia.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid call-to-action">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <p>
                        <span>Need E-Visa for Ethiopia? Apply Now! To Get Started.</span>
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
                    <h1>Description of Ethiopia E-Visa</h1>
                    <div class="line-rule"></div>
                    <p>More than a typical African country,
Ethiopia is known for its long historical
culture, magnificent nature, and
diverse wild world and warmly
welcomes thousands of visitors every
year. This country also is one of the
cradles of humanity. It owns the most
UNESCO World Heritage Sites than any
other countries in the area with 8
cultural heritages and 1 nature
heritage.</p>
                    <p>Elfrique provides exceptional Ethiopia
e-visa processing services. Our
experience, blended with expertise
will help you access Ethiopia
effortlessly.</p>
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
                        <img src="@/assets/images/iconVisa1.png" ondragstart="return false;">
                        <h4>Business</h4>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="box-feat">
                        <img src="@/assets/images/iconVisa2.png" ondragstart="return false;">
                        <h4>Tourist</h4>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="box-feat">
                        <img src="@/assets/images/iconVisa3.png" ondragstart="return false;">
                        <h4>Transit Visa</h4>
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
                                <input v-model="evisaDetails.dapart_date" type="date">
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
                    dapart_date: '',
                    return_date: '',
                    visa_type: '',
                    numberOfTravelers: '',
                    email: '',
                    phone_number: '',
                    additional_info: '',
                    destination: 'Ethiopia',
                },
                loading: false,
                error: '',
                methods: '',
            }},

            methods:{
                 resetform(){
                this.evisaDetails = {
                    fullname: '',
                    dapart_date: '',
                    return_date: '',
                    visa_type: '',
                    numberOfTravelers: '',
                    email: '',
                    phone_number: '',
                    additional_info: '',
                    destination: 'Ethiopia',
                }
            },
        submitEvisa(){
            this.loading = true;
            EvisaService.submitEvisa(this.evisaDetails).then(response => {
                    this.$store.dispatch('vote/getEvisaCountry',this.evisaDetails.destination).then(
            () => {
            //console.log(this.$store.state.vote.voteContent)
              this.$router.push('/evisa/details-sent');
            })
                   /*  this.message = ` You are almost set! 
One of our Visa Consultants will be in contact with you shortly!. The number should be clickable that takes them to call immidiately
Meanwhile, you could as well call us on +234 906 141 2204 to hasten your request.`;
                    this.loading = false;
                    window.scrollTo(0,0) */
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