import { createWebHashHistory, createRouter } from "vue-router";
import List from './components/List'
import Home from './components/Home'
import Detail from './components/Detail'
import Author from './components/Author'
import Comment from './components/Comment'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: 'author',
        component: Author
      },
      {
        path: 'comment',
        component: Comment
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// router.beforeEach((to,from) => {
//   //페이지 변경 전에 실행할 코드
// })

export default router; 