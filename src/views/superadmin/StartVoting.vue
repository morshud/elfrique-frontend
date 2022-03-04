<template>
    <title>Start Voting Form | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Start Voting</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active"><router-link to="/superadmin/overview-voting" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Start Voting</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <div class="start-vote-details alert alert-dismissible fade show" role="alert">
                        Please choose if your vote contest has categories or not by selecting the appropriate radio button corresponding to yours below. <br>
                        <strong>**Select your type of vote, if free or paid**</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-1">
                                <label for="category selection">Category Selection</label>
                                <input class="radio" type="radio" name="category" id="pageant"> <span>Pageants (Not Categorized)</span>
                                <input class="radio" type="radio" name="category" id="award"> <span>Award (Categorized)</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="voting type">Voting Type</label>
                                <input class="radio" type="radio" name="type" id="paid"> <span>Paid</span>
                                <input class="radio" type="radio" name="type" id="free"> <span>Free</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="voting packages">Voting Packages</label>
                                <input class="radio" type="radio" name="package" id="disabled"> <span>Disabled</span>
                                <input class="radio" type="radio" name="package" id="enabled"> <span>Enabled</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="daily vote limit">Daily Vote Limit</label>
                                <input class="radio" type="radio" name="limit" id="unlimited"> <span>Unlimited</span>
                                <input class="radio" type="radio" name="limit" id="limited"> <span>Limited</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="contestant profile view">Contestant Profile View</label>
                                <input class="radio" type="radio" name="contestant" id="off"> <span>Off</span>
                                <input class="radio" type="radio" name="contestant" id="on"> <span>On</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="preferred payment gateway">Select Preferred Payment Gateway</label>
                                <select name="gateway" id="gateway">
                                    <option value="paystack">Paystack</option>
                                    <option value="flutterwave">Flutterwave</option>
                                    <option value="payu">Payu</option>
                                    <option value="interswitch">Interswitch</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="accept crypto payments">Accept Crypto Payments (Bitcoin, Ethereum, Steem)</label>
                                <input class="radio" type="radio" name="cryto" id="off"> <span>Off</span>
                                <input class="radio" type="radio" name="cryto" id="on"> <span>On</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed">Proceed</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>