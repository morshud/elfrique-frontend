<template>
    <title>View Vendor Service | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                View Vendor Service
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Vendor</li>
                    <li class="breadcrumb-item active">View Vendor Service</li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                <div class="card">
                    <div class="card-body card-table">
                        <div class="buttons-table">
                            <button type="button">Copy</button>
                            <button type="button">CSV</button>
                            <button type="button">Excel</button>
                            <button type="button">PDF</button>
                            <button type="button">Print</button>
                        </div>
                        <div class="search-table">
                            <form>
                                <input type="text" placeholder="Search...">
                            </form>
                        </div>
                        <!--Table-->
                        <table class="table datatable card-table-table">
                            <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Vendor Title</th>
                                <th scope="col">Service Price (NGN)</th>
                                <th scope="col">Vendor Service Image</th> 
                                <th scope="col">Vendor Description</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Hamzat Event
                                </td>
                                <td>
                                    Event Decorator
                                </td>
                                <td>
                                    100,000
                                </td>
                                <td>
                                    <input type="file">
                                </td>
                                <td>
                                    what sup
                                </td>
                                <td>
                                    <button style="color: #000 !important; " class="btn btn-danger btn-sm mx-1 text-dark m-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <nav>
                            <ul class="pagination pagination-md">
                                <li class="page-item disabled">
                                    <a class="page-link"><span aria-hidden="true">&laquo;</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link"><span aria-hidden="true">&raquo;</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>  
                </div>
                </div>
            </div>
        </section>
    </main>

    <dash-footer/>
    
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>

    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import EventService from '../../service/event.service'
    import VendorService from '../../service/vendor.service'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
            return{
            content: '',
            eventId: '',
            message: '',
            error: '',
            file: '',
            loading: false,
            successful: false,
            job: {
                description: '',
                title: '',
                price: '',
            }
            
    
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        eventName: function() {
            this.content.find(event => {
                if(event.id == this.eventId){
                    console.log(event.title)
                    return event.title;
                } 
                return null;
            })
         },
        },
        created() {
     if (!this.loggedIn) {
      this.$router.push('/login');
    }

    EventService.getEvents().then
    (
        response => {
            this.content = response.data.events;
        }
    )


    },

    methods:{
        createJobs(){
            this.loading = true;

            let formData = new FormData();
            formData.append('image', this.file);                                                                                                                                                                                                                                           
            formData.append('job_type', this.job.title);
            formData.append('job_description', this.job.description);
            formData.append('budget', this.job.price);
            

            VendorService.createJobs(formData, this.eventId).then(response => {
                    
                    this.message = `${this.job.title} JOB Created Successfully`;
                    this.loading = false;
                    window.scrollTo(0,0)

            },
            error => {
                console.log(error);
                this.error = error.response.data.message;
                console.log(error.response.data);


                this.loading = false;
                 window.scrollTo(0,0)
            });
        },

            
        handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
     },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptQuill = document.createElement('script')
        let externalScriptRich = document.createElement('script')

        externalScriptQuill.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/quill.min.js')
        externalScriptRich.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/rich-text.js')

        document.head.appendChild(externalScriptQuill)
        document.head.appendChild(externalScriptRich)
      }
    }
</script>