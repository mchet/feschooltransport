import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import ViewFindRoute from './views/ViewFindRoute';
import ViewRouteList from './views/ViewRouteList';
import ViewStopsList from './views/ViewStopsList';
import ViewTransportList from './views/ViewTransportList';

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/find-route',
            name: 'ViewFindRoute',
            component: ViewFindRoute,
        },
        {
            path: '/route-list',
            name: 'ViewRouteList',
            component: ViewRouteList,
        },
        {
            path: '/stop-list',
            name: 'ViewStopsList',
            component: ViewStopsList,
        },
        {
            path: '/transport-list',
            name: 'ViewTransportList',
            component: ViewTransportList,
        }
    ],

});
