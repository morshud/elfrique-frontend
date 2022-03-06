<template>
    <section class="newsletter">
      <div class="container">
        <div class="row">
          <div class="col-md-5 img-area">
            <img src="@/assets/images/newsletter-img.jpg" ondragstart="return false;">
          </div>
          <div class="col-md-7">
            <div class="newsletter-div">
              <div class="header">
                <span class="tag-text">Newsletter</span>
                <h1>Subscribe To Our Newsletter</h1>
                <p>Be the first to get our latest news and updates.</p>
              </div>
              <form>
                <div class="row ">
                  <!--Email-->
                  <div class="col-lg-10">
                    <label for="email">Enter Your Email</label>
                    <input type="email" required>
                  </div>
                  <!--Subscribe Button-->
                  <div class="col-lg-10">
                    <input type="submit" value="Subscribe">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>