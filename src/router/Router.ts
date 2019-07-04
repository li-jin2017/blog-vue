import Vue from 'vue';
import Router from 'vue-router';
import CenterContent from '@/components/content/CenterContent.vue';
import Timeline from '@/components/content/Timeline.vue';


Vue.use(Router);

export default new Router({

    routes: [
        { path: '/', name: 'home', component: CenterContent },
        { path: '/timeline', name: 'timeline', component: Timeline }
    ]
});