<template>
    <title>My Vendor Profile | Elfrique</title>
    <dash-header/>

    <main id="main" class="main">

    <div class="pagetitle">
      <h1>My Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
          <li class="breadcrumb-item active">Vendor Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
              <img src="@/assets/images/vendor-profile.jpg" alt="Profile" class="rounded-circle">
              <h2>Vendor Name Here</h2>
            </div>
          </div>

        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 class="card-title">Vendor Profile Details</h5>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Full Name</div>
                    <div class="col-lg-9 col-md-8">Vendor Name Here</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Phone</div>
                    <div class="col-lg-9 col-md-8">08012345678, 08112345678</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">myemail@email.com</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">About Me</div>
                    <div class="col-lg-9 col-md-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo blanditiis optio suscipit neque facere pariatur veniam et voluptatibus quas, porro aperiam minus similique? Dolor, saepe autem. Qui veritatis deleniti veniam quasi, obcaecati porro quia. Aliquid laudantium voluptate natus, recusandae, quaerat nemo ab tempore consequuntur libero ex inventore nisi impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum qui quae suscipit, autem quasi.
                    </div>
                  </div>

                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
                  <!-- Profile Edit Form -->
                  <form>
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div class="col-md-8 col-lg-9">
                        <img src="@/assets/images/vendor-profile.jpg">
                        <div class="pt-2">
                          <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                          <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="fullName" type="text" class="form-control-input" id="fullName" placeholder="Enter first name">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-md-4 col-lg-3 col-form-label">Last Name</label>
                      <div class="col-md-8 col-lg-9">
                        <input type="text" class="form-control-input">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div class="col-md-8 col-lg-9">
                        <input type="email" class="form-control-input">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-md-4 col-lg-3 col-form-label">Phone Number</label>
                      <div class="col-md-8 col-lg-9">
                        <input type="tel" class="form-control-input">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-md-4 col-lg-3 col-form-label">About</label>
                      <div class="col-md-8 col-lg-9">
                        <div class='textarea divTextArea' contenteditable></div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-md-4 col-lg-3 col-form-label">Gallery</label>
                      <div class="col-md-8 col-lg-9">
                        <input type="file" class="form-control-input" accept=".jpg, .jpeg, .png, .webp" multiple>
                        <small class="uploadSmallPicture">You can select multiple pictures</small>
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-success">Save Changes</button>
                    </div>
                  </form><!-- End Profile Edit Form -->

                </div>

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
    
    <dash-footer/>
</template>
<style scoped>
.form-control-input{
    width: 100%;
    padding: 6px 13px;
    border: 1px solid #a3a3a3;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}
.uploadSmallPicture{
    color: red;
}
.divTextArea{
    width: 100%;
    height: 200px;
    padding: 10px 13px;
    border: 1px solid #a3a3a3;
    color: #000;
    font-size: 15px;
    font-weight: 400;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>
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