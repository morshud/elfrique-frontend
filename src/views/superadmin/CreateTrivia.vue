<template>
    <title>Create Trivia | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Create Trivia</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Trivia</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-trivia" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Create Trivia</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div create-event-div">
            <div class="row justify-content-center">
                <div class="col-lg-11">
                    <div class="start-vote-details alert alert-dismissible fade show" role="alert">
                        <span class="text-danger text-lg"><strong>NOTE*</strong></span>
                        <br>
                        <li class="bg-light py-2 px-2 text-dark mt-2">Trivia title is the title for the trivia you want to setup, which will also serve as identifier for this trivia</li>
                        <li class="bg-light py-2 px-2 text-dark">Trivia details are the necessary details the user answering should see when he/she navigates to the trivia page</li>
                        <li class="bg-light py-2 px-2 text-dark">Instruction(s) are the necessary steps or guideline the user is shown before he starts answering the questions</li>
                        <li class="bg-light py-2 px-2 text-dark">Duration is how long the user is allowed to answer the questions after which it is automatically submitted if the time elapses and the user has not clicked the submit button, it is to be provided in minutes</li>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <form>
                    <div class="row justify-content-center">
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Trivia Title-->
                                <div class="col-lg-12 mt-2">
                                    <label for="trivia title">Trivia Title</label>
                                    <input class="input" type="text" placeholder="Enter trivia title">
                                </div>
                                <!--Trivia Image-->
                                <div class="col-lg-12 mt-4">
                                    <label for="trivia image">Trivia Image</label>
                                    <input class="input" type="file" accept=".jpg, .jpeg, .png, .jfif">
                                    <small class="text-danger font-weight-bold">(only .jpg, .jpeg, .png, .jfif or .webp format)</small>
                                </div>
                                <!--Form Type-->
                                <div class="col-lg-12 mt-4">
                                    <label for="trivia type">Trivia Type</label>
                                    <input class="radio" type="radio" name="trivia" id="paid"> <span>Paid</span>
                                    <input class="radio" type="radio" name="trivia" id="free"> <span>Free</span>
                                </div>
                                <!--Trivia Details-->
                                <div class="col-lg-12 mt-4">
                                    <label for="trivia details">Trivia Details</label>
                                    <textarea class="input" cols="30" rows="4" placeholder="Enter details here..."></textarea>
                                </div>
                                <!--Instruction-->
                                <div class="col-lg-12 mt-4">
                                    <label for="instruction">Instruction(s)</label>
                                    <textarea class="input" cols="30" rows="4" placeholder="Type instruction..."></textarea>
                                </div>
                                <!--Duration-->
                                <div class="col-lg-12 mt-4">
                                    <label for="duration">Duration (in minutes)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Number of Times-->
                                <div class="col-lg-12 mt-4">
                                    <label for="number of times">Number of Times User Can Answer</label>
                                    <input class="radio" type="radio" name="times" id="once"> <span>Once</span>
                                    <input class="radio" type="radio" name="times" id="unlimited"> <span>Unlimited</span>
                                </div>
                            </div>
                        </div>
                        <!--Question DIV-->
                        <div class="col-lg-11 event-details-header mt-3 text-center">Question(s)</div>
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Question-->
                                <div class="col-lg-12 mt-4">
                                    <label for="question">Question</label>
                                    <textarea class="input" cols="30" rows="4" placeholder="Type question here..."></textarea>
                                </div>
                                <!--Question Image-->
                                <div class="col-lg-12 mt-4">
                                    <label for="question image">Question Image (optional)</label>
                                    <input class="input" type="file" accept=".jpg, .jpeg, .png, .jfif">
                                    <small class="text-danger font-weight-bold">(only .jpg, .jpeg, .png, .jfif or .webp format)</small>
                                </div>
                                <!--Nature of Question-->
                                <div class="col-lg-12 mt-4">
                                    <label for="nature of question">Nature of Question</label>
                                    <input class="radio" type="radio" name="question" id="multichoice" checked> <span>Multichoice</span>
                                    <input class="radio" type="radio" name="question" id="theory"> <span>Theory</span>
                                </div>
                                <!--Option-->
                                <div class="col-lg-12 alert mt-2 alert-dismissible optionDivQuestion">
                                    <label for="option">Option</label>
                                    <input class="input" type="text">
                                    <a type="button" class="btn btn-sm btn-danger" aria-label="Close" data-bs-dismiss="alert">Remove</a>
                                </div>
                                <!--Option-->
                                <div class="col-lg-12 alert mt-2 alert-dismissible optionDivQuestion">
                                    <label for="option">Option</label>
                                    <input class="input" type="text">
                                    <a type="button" class="btn btn-sm btn-danger" aria-label="Close" data-bs-dismiss="alert">Remove</a>
                                </div>
                                <!--Option-->
                                <div class="col-lg-12 alert mt-2 alert-dismissible optionDivQuestion">
                                    <label for="option">Option</label>
                                    <input class="input" type="text">
                                    <a type="button" class="btn btn-sm btn-danger" aria-label="Close" data-bs-dismiss="alert">Remove</a>
                                </div>
                                <!--Add Option-->
                                <div class="col-lg-12">
                                    <a type="button" class="btn-success btn-sm">Add Option</a>
                                </div>
                                <!--Add New Question-->
                                <div class="col-lg-12 mt-4">
                                    <a type="button" class="btn-primary btn-lg">Add New Question <i class="bi bi-plus-circle-fill"></i></a>
                                </div>
                            </div>
                        </div>
                        <!--Submit Trivia Button-->
                        <div class="col-lg-11 mt-4">
                            <button type="submit">Submit Trivia</button>
                        </div>
                    </div>
                </form>
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