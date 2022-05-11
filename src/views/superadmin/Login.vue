<template>
    <title>Login - Super Admin | Elfrique – Complete Event Management System</title>

    <div class="bodySuper">
        <main class="authMain">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="form-area">
                            <div class="header-form">
                                <h3>Super Admin Login</h3>
                            </div>
                            <form name="form" @submit.prevent="handleLogin">
                                <div class="row">
                                    <div class="col-lg-12">
                                            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                                    </div>
                                    <!--Email-->
                                    <div class="col-lg-12">
                                        <label for="email">Email</label>
                                        <input v-model="user.email" type="email" placeholder="Enter email address" required>
                                    </div>
                                    <!--Password-->
                                    <div class="col-lg-12">
                                        <label for="password">Password</label>
                                        <input v-model="user.password" type="password" placeholder="Enter password" required>
                                    </div>
                                    <!--Submit Button-->
                                    <div class="col-lg-12 text-center">
                                        <button type="submit" :disabled="loading">Log In <span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style src="@/assets/css/authStyle.css"></style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.admin.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/superadmin/dashboard');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
     
        if (this.user.email && this.user.password) {
          this.$store.dispatch('admin/login', this.user).then(
            () => {
              this.$router.push('/superadmin/overview-general');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      }
    },
  

      mounted(){
        window.scrollTo(0,0)
      }
};
    
</script>