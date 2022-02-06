<template>
    <title>Privacy Policy | Elfrique – Complete Event Management System</title>
    <elfrique-header/>
    
    <!--Resource Breadcrumb-->
    <section class="resource-breadcrumb">
        <div class="container">
            <div class="row">
                <div class="col-md-7 head-banner-text">
                    <h1>Privacy Policy</h1>
                    <div class="line-rule"></div>
                    <p>This privacy policy sets out how we collect, handle, store and protect information about you.</p>
                </div>
            </div>
        </div>
    </section>
    <!--Resource Breadcrumb Ends-->

    <!--Resource Note-->
    <section class="resource-note">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-11">
                    <p>We only collect data through our questionnaire from users only if they voluntarily submit such information to us. Users can always refuse to supply their data, except that it may prevent them from engaging in certain site related activities or services that we offer. Any information collected from our users will NOT be sold, shared, or rented to third parties.</p>
                    <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent.</p>
                    <h1>HOW WE PROTECT YOUR INFORMATION</h1>
                    <p>We use appropriate data collection software, storage and optimum security measures to protect user-data and our website as whole against unauthorized access, alteration, disclosure or destruction of information.</p>
                    <p>Sensitive and private data exchange between the Site and its users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.</p>
                    <h1>THIRD PARTY VENDORS</h1>
                    <p>Users of our website may find advertising or other content on our website that links to service owners or providers and other third parties. We do not own some of the services offered on the website nor control the quality of services they provide. We only bridge the gap between customers and service providers.</p>
                    <h1>CHANGES TO THIS PRIVACY POLICY</h1>
                    <p>Elfrique has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site, revise the modification date at the bottom of this page and send you an email for notification.</p>
                    <h1>ACCEPTANCE</h1>
                    <p>By using this Elfrique website, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
                </div>
            </div>
        </div>
    </section>
    <!--Resource Note Ends-->

    <elfrique-footer/>
</template>

<script>
    import Header from './elfrique-header.vue'
    import Footer from './elfrique-footer.vue'
    export default {
      name: "Elfrique",
      components:{
      'elfrique-header':Header,
      'elfrique-footer':Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>