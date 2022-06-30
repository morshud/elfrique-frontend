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
                <!-- Show this alert below when a user subscribe for newsletter -->
                <!-- <h6 class="alertSubscribe">Thanks For Subscribing To Our Newsletter!</h6> -->
                <span class="tag-text">Newsletter</span>
                <h1>Subscribe To Our Newsletter</h1>
                <p>Be the first to get our latest news and updates.</p>
              </div>
              <div id="mc_embed_signup">
                <form action="https://facebook.us20.list-manage.com/subscribe/post?u=3e271affbd0840470e2d612ff&amp;id=2602f8aff0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div class="row ">
                    <!--Email-->
                    <div class="col-lg-10">
                      <label for="email">Enter Your Email</label>
                      <input type="email" name="EMAIL" required>
                       <input type="text" name="b_3e271affbd0840470e2d612ff_2602f8aff0" hidden tabindex="-1" value="">
                    </div>
                    <!--Subscribe Button-->
                    <div class="col-lg-10">
                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" value="Subscribe">
                     
                    </div>
                  </div>
                  <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
</template>