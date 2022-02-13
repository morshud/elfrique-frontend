import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import BlogPost from "../views/BlogPost.vue";
import Pricing from "../views/Pricing.vue";
import Contact from "../views/Contact.vue";
import Privacy from "../views/Privacy.vue";
import Terms from "../views/Terms.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import VerifyEmail from "../views/VerifyEmail.vue";
import Forgot from "../views/Forgot.vue";
import Dashboard from "../views/dashboard/Dashboard.vue";
import DashProfile from "../views/dashboard/Profile.vue";
import DashStartVoting from "../views/dashboard/StartVoting.vue";
import DashCreateVoting from "../views/dashboard/CreateVote.vue";
import DashAddContestant from "../views/dashboard/AddContestant.vue";
import DashAddNominee from "../views/dashboard/AddNominee.vue";
import DashAddSponsors from "../views/dashboard/AddSponsors.vue";
import DashAddCategory from "../views/dashboard/AddCategory.vue";
import DashAddInfo from "../views/dashboard/AddInfo.vue";
import DashSearchVote from "../views/dashboard/SearchVote.vue";
import DashCreateEvent from "../views/dashboard/CreateEvent.vue";
import DashViewEvent from "../views/dashboard/ViewEvent.vue";
import DashSearchEvent from "../views/dashboard/SearchEvent.vue";
import DashPersonalTicket from "../views/dashboard/PersonalTicket.vue";
import DashSearchTicket from "../views/dashboard/SearchTicket.vue";
import DashCreateForm from "../views/dashboard/CreateForm.vue";
import DashViewForm from "../views/dashboard/ViewForm.vue";
import DashPersonalForm from "../views/dashboard/PersonalForm.vue";
import DashSearchForm from "../views/dashboard/SearchForm.vue";
import DashCreateTrivia from "../views/dashboard/CreateTrivia.vue";
import DashViewTrivia from "../views/dashboard/ViewTrivia.vue";
import DashUpdateTrivia from "../views/dashboard/UpdateTrivia.vue";
import DashViewResult from "../views/dashboard/ViewResult.vue";
import DashSearchTrivia from "../views/dashboard/SearchTrivia.vue";
import DashCreateURL from "../views/dashboard/CreateURL.vue";
import DashViewURL from "../views/dashboard/ViewURL.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blogs", name: "Blogs", component: Blogs },
  { path: "/blogPost", name: "BlogPost", component: BlogPost },
  { path: "/pricing", name: "Pricing", component: Pricing },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/privacy", name: "Privacy", component: Privacy },
  { path: "/terms", name: "Terms", component: Terms },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  {
    path: "/verify",
    name: "verify",
    component: VerifyEmail,
    props: (route) => ({ email: route.query.email, token: route.query.token }),
  },
  { path: "/forgot", name: "Forgot", component: Forgot },
  { path: "/organiser/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/organiser/profile", name: "DashProfile", component: DashProfile },
  {
    path: "/organiser/start-voting",
    name: "DashStartVoting",
    component: DashStartVoting,
  },

  {
    path: "/organiser/create-voting",
    name: "DashCreateVoting",
    component: DashCreateVoting,
  },
  {
    path: "/organiser/add-contestant",
    name: "DashAddContestant",
    component: DashAddContestant,
  },
  {
    path: "/organiser/add-sponsor",
    name: "DashAddSponsors",
    component: DashAddSponsors,
  },
  {
    path: "/organiser/add-category",
    name: "DashAddCategory",
    component: DashAddCategory,
  },
  {
    path: "/organiser/add-nominee",
    name: "DashAddNominee",
    component: DashAddNominee,
  },
  { path: "/organiser/add-info", name: "DashAddInfo", component: DashAddInfo },
  {
    path: "/organiser/search-vote",
    name: "DashSearchVote",
    component: DashSearchVote,
  },
  {
    path: "/organiser/create-event",
    name: "DashCreateEvent",
    component: DashCreateEvent,
  },
  {
    path: "/organiser/view-event",
    name: "DashViewEvent",
    component: DashViewEvent,
  },
  {
    path: "/organiser/search-event",
    name: "DashSearchEvent",
    component: DashSearchEvent,
  },
  {
    path: "/organiser/personal-ticket",
    name: "DashPersonalTicket",
    component: DashPersonalTicket,
  },
  {
    path: "/organiser/search-ticket",
    name: "DashSearchTicket",
    component: DashSearchTicket,
  },
  {
    path: "/organiser/create-form",
    name: "DashCreateForm",
    component: DashCreateForm,
  },
  {
    path: "/organiser/view-form",
    name: "DashViewForm",
    component: DashViewForm,
  },
  {
    path: "/organiser/personal-form",
    name: "DashPersonalForm",
    component: DashPersonalForm,
  },
  {
    path: "/organiser/search-form",
    name: "DashSearchForm",
    component: DashSearchForm,
  },
  {
    path: "/organiser/create-trivia",
    name: "DashCreateTrivia",
    component: DashCreateTrivia,
  },
  {
    path: "/organiser/view-trivia",
    name: "DashViewTrivia",
    component: DashViewTrivia,
  },
  {
    path: "/organiser/update-trivia",
    name: "DashUpdateTrivia",
    component: DashUpdateTrivia,
  },
  {
    path: "/organiser/view-result",
    name: "DashViewResult",
    component: DashViewResult,
  },
  {
    path: "/organiser/search-trivia",
    name: "DashSearchTrivia",
    component: DashSearchTrivia,
  },
  {
    path: "/organiser/create-url",
    name: "DashCreateURL",
    component: DashCreateURL,
  },
  { path: "/organiser/view-url", name: "DashViewURL", component: DashViewURL },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
