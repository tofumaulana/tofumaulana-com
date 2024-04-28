import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import SkillsView from '../views/Skills.vue';
import ContactView from '../views/Contact.vue';
import UserView from '../views/User.vue';
// import UserDetailView from '../views/UserDetail.vue';
// import UserProfileView from '../views/UserProfile.vue';
// import UserPostView from '../views/UserPost.vue';
import UserIndexView from '../views/UserIndex.vue';
import TelkomsatView from '../views/Telkomsat.vue';
import ProjectView from '../views/Project.vue';

const routes = [
  { path: '', component: HomeView },
  { path: '/skills', component: SkillsView },
  { path: '/user', component: UserView },
  { path: '/contact', component: ContactView },
  // { path: '/user/:params', component: UserDetailView },
  // { path: '/user/:params/post', component: UserPostView },
  // { path: '/user/:params/profile', component: UserProfileView },
  {
    path: '/user/:name',
    component: UserIndexView,
    children: [
      // {
      //   path: '',
      //   component: UserDetailView,
      // },
      // {
      //   path: '/user/:name/post',
      //   component: UserPostView,
      // },
      // {
      //   path: '/user/:name/profile',
      //   component: UserProfileView,
      // },
      {
        path: '/user/:name/telkomsat',
        component: TelkomsatView,
      },
      {
        path: '/user/:name/project',
        component: ProjectView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
