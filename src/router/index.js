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
import DashAddTicket from "../views/dashboard/AddTicket.vue";
import DashViewEvent from "../views/dashboard/ViewEvent.vue";
/* import DashSearchEvent from "../views/dashboard/SearchEvent.vue"; */
import DashEventSalesAnalytics from "../views/dashboard/EventSalesAnalytics.vue";
import DashPersonalTicket from "../views/dashboard/PersonalTicket.vue";
import DashSearchTicket from "../views/dashboard/SearchTicket.vue";
import DashCreateForm from "../views/dashboard/CreateForm.vue";
import DashViewForm from "../views/dashboard/ViewForm.vue";
import DashPersonalForm from "../views/dashboard/PersonalForm.vue";
import DashFormSalesAnalytics from "../views/dashboard/FormSalesAnalytics.vue";
import DashSearchForm from "../views/dashboard/SearchForm.vue";
import DashCreateTrivia from "../views/dashboard/CreateTrivia.vue";
import DashViewTrivia from "../views/dashboard/ViewTrivia.vue";
import DashUpdateTrivia from "../views/dashboard/UpdateTrivia.vue";
import DashViewResult from "../views/dashboard/ViewResult.vue";
import DashSearchTrivia from "../views/dashboard/SearchTrivia.vue";
import DashCreateURL from "../views/dashboard/CreateURL.vue";
import DashViewURL from "../views/dashboard/ViewURL.vue";
import DashViewContestants from "../views/dashboard/ViewContestants.vue";
import DashVoteSalesAnalytics from "../views/dashboard/VoteSalesAnalytics.vue";
import DashResultSetting from "../views/dashboard/ResultSetting.vue";
import DashTriviaSalesAnalytics from "../views/dashboard/TriviaSalesAnalytics.vue";

//seller dashboard

import SecondDashboard from "../views/dashboard-second/Dashboard.vue";
import SecondDashProfile from "../views/dashboard-second/Profile.vue";
import SecondDashStartVoting from "../views/dashboard-second/StartVoting.vue";
import SecondDashCreateVoting from "../views/dashboard-second/CreateVote.vue";
import SecondDashAddContestant from "../views/dashboard-second/AddContestant.vue";
import SecondDashAddNominee from "../views/dashboard-second/AddNominee.vue";
import SecondDashAddSponsors from "../views/dashboard-second/AddSponsors.vue";
import SecondDashAddCategory from "../views/dashboard-second/AddCategory.vue";
import SecondDashAddInfo from "../views/dashboard-second/AddInfo.vue";
import SecondDashSearchVote from "../views/dashboard-second/SearchVote.vue";
import SecondDashCreateEvent from "../views/dashboard-second/CreateEvent.vue";
import SecondDashAddTicket from "../views/dashboard-second/AddTicket.vue";
import SecondDashViewEvent from "../views/dashboard-second/ViewEvent.vue";
import SecondDashSearchEvent from "../views/dashboard-second/SearchEvent.vue";
import SecondDashEventSalesAnalytics from "../views/dashboard-second/EventSalesAnalytics.vue";
import SecondDashPersonalTicket from "../views/dashboard-second/PersonalTicket.vue";
import SecondDashSearchTicket from "../views/dashboard-second/SearchTicket.vue";
import SecondDashCreateForm from "../views/dashboard-second/CreateForm.vue";
import SecondDashViewForm from "../views/dashboard-second/ViewForm.vue";
import SecondDashPersonalForm from "../views/dashboard-second/PersonalForm.vue";
import SecondDashFormSalesAnalytics from "../views/dashboard-second/FormSalesAnalytics.vue";
import SecondDashSearchForm from "../views/dashboard-second/SearchForm.vue";
import SecondDashCreateTrivia from "../views/dashboard-second/CreateTrivia.vue";
import SecondDashViewTrivia from "../views/dashboard-second/ViewTrivia.vue";
import SecondDashUpdateTrivia from "../views/dashboard-second/UpdateTrivia.vue";
import SecondDashViewResult from "../views/dashboard-second/ViewResult.vue";
import SecondDashSearchTrivia from "../views/dashboard-second/SearchTrivia.vue";
import SecondDashCreateURL from "../views/dashboard-second/CreateURL.vue";
import SecondDashViewURL from "../views/dashboard-second/ViewURL.vue";
import SecondDashViewContestants from "../views/dashboard-second/ViewContestants.vue";
import SecondDashVoteSalesAnalytics from "../views/dashboard-second/VoteSalesAnalytics.vue";
import SecondDashResultSetting from "../views/dashboard-second/ResultSetting.vue";
import SecondDashTriviaSalesAnalytics from "../views/dashboard-second/TriviaSalesAnalytics.vue";

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
    path: "/organiser/view-contestants",
    name: "DashViewContestants",
    component: DashViewContestants,
  },
  {
    path: "/organiser/view-vote-analytics",
    name: "DashVoteSalesAnalytics",
    component: DashVoteSalesAnalytics,
  },
  {
    path: "/organiser/result-setting",
    name: "DashResultSetting",
    component: DashResultSetting,
  },
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
    path: "/organiser/add-ticket",
    name: "DashAddTicket",
    component: DashAddTicket,
  },
  {
    path: "/organiser/view-event",
    name: "DashViewEvent",
    component: DashViewEvent,
  },
  /* {
    path: "/organiser/search-event",
    name: "DashSearchEvent",
    component: DashSearchEvent,
  }, */
  {
    path: "/organiser/event-sales-analytics",
    name: "DashEventSalesAnalytics",
    component: DashEventSalesAnalytics,
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
    path: "/organiser/form-sales-analytics",
    name: "DashFormSalesAnalytics",
    component: DashFormSalesAnalytics,
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
    path: "/organiser/trivia-sales-analytics",
    name: "DashTriviaSalesAnalytics",
    component: DashTriviaSalesAnalytics,
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

  //seller dashboard
  {
    path: "/user/dashboard",
    name: "SecondDashboard",
    component: SecondDashboard,
  },
  {
    path: "/user/profile",
    name: "SecondDashProfile",
    component: SecondDashProfile,
  },

  {
    path: "/user/view-contestants",
    name: "SecondDashViewContestants",
    component: SecondDashViewContestants,
  },
  {
    path: "/user/view-vote-analytics",
    name: "SecondDashVoteSalesAnalytics",
    component: SecondDashVoteSalesAnalytics,
  },
  {
    path: "/user/result-setting",
    name: "SecondDashResultSetting",
    component: SecondDashResultSetting,
  },
  {
    path: "/user/search-vote",
    name: "SecondDashSearchVote",
    component: SecondDashSearchVote,
  },

  {
    path: "/user/create-event",
    name: "SecondDashCreateEvent",
    component: SecondDashCreateEvent,
  },
  {
    path: "/user/add-ticket",
    name: "SecondDashAddTicket",
    component: SecondDashAddTicket,
  },
  {
    path: "/user/view-event",
    name: "SecondDashViewEvent",
    component: SecondDashViewEvent,
  },
  /* {
    path: "/user/search-event",
    name: "SecondDashSearchEvent",
    component: SecondDashSearchEvent,
  }, */
  {
    path: "/user/event-sales-analytics",
    name: "SecondDashEventSalesAnalytics",
    component: SecondDashEventSalesAnalytics,
  },
  {
    path: "/user/personal-ticket",
    name: "SecondDashPersonalTicket",
    component: SecondDashPersonalTicket,
  },
  {
    path: "/user/search-ticket",
    name: "SecondDashSearchTicket",
    component: SecondDashSearchTicket,
  },
  {
    path: "/user/create-form",
    name: "SecondDashCreateForm",
    component: SecondDashCreateForm,
  },
  {
    path: "/user/view-form",
    name: "SecondDashViewForm",
    component: SecondDashViewForm,
  },
  {
    path: "/user/personal-form",
    name: "SecondDashPersonalForm",
    component: SecondDashPersonalForm,
  },
  {
    path: "/user/form-sales-analytics",
    name: "SecondDashFormSalesAnalytics",
    component: SecondDashFormSalesAnalytics,
  },
  {
    path: "/user/search-form",
    name: "SecondDashSearchForm",
    component: SecondDashSearchForm,
  },
  {
    path: "/user/create-trivia",
    name: "SecondDashCreateTrivia",
    component: SecondDashCreateTrivia,
  },
  {
    path: "/user/view-trivia",
    name: "SecondDashViewTrivia",
    component: SecondDashViewTrivia,
  },
  {
    path: "/user/update-trivia",
    name: "SecondDashUpdateTrivia",
    component: SecondDashUpdateTrivia,
  },
  {
    path: "/user/view-result",
    name: "SecondDashViewResult",
    component: SecondDashViewResult,
  },
  {
    path: "/user/trivia-sales-analytics",
    name: "SecondDashTriviaSalesAnalytics",
    component: SecondDashTriviaSalesAnalytics,
  },
  {
    path: "/user/search-trivia",
    name: "SecondDashSearchTrivia",
    component: SecondDashSearchTrivia,
  },
  {
    path: "/user/create-url",
    name: "SecondDashCreateURL",
    component: SecondDashCreateURL,
  },
  {
    path: "/user/view-url",
    name: "SecondDashViewURL",
    component: SecondDashViewURL,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
