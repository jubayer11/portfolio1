import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
import facebook from '../components/icons/facebook.vue'
import insta from '../components/icons/insta.vue'
import twitter from '../components/icons/twitter.vue'
import message from '../components/icons/message.vue'
import portfolio from '../components/icons/portfolio.vue'
import skills from '../components/icons/skills.vue'
import experience from '../components/icons/experience.vue'
import media from '../components/icons/media.vue'
import about from '../components/icons/about.vue'
import education from '../components/icons/education.vue'
import stripe from '../components/icons/stripe.vue'
import contact_message from '../components/icons/contact_nessage.vue'
import link from "../components/icons/link.vue";
import phone from "../components/icons/phone.vue"
import player from "../components/icons/player.vue"
import wave from "../components/icons/wave.vue"
import box from "../components/icons/box.vue"
import box1 from "../components/icons/box1.vue"
import box2 from "../components/icons/box3.vue"
import equal from "../components/icons/equal.vue"
import arrow from "../components/icons/arrow.vue"
import arrow_left from "../components/icons/arrow_left.vue"

export default new Vuetify({
    theme: {/**/},
    icons: {
        values: {
            facebook: { // name of our custom icon
                component: facebook, // our custom component
            },
            insta: { // name of our custom icon
                component: insta, // our custom component
            },
            twitter: { // name of our custom icon
                component: twitter, // our custom component
            },
            message: { // name of our custom icon
                component: message, // our custom component
            },
            portfolio: { // name of our custom icon
                component: portfolio, // our custom component
            },
            skills: { // name of our custom icon
                component: skills, // our custom component
            },
            media: { // name of our custom icon
                component: media, // our custom component
            },
            education: { // name of our custom icon
                component: education, // our custom component
            },
            experience: { // name of our custom icon
                component: experience, // our custom component
            },
            about: { // name of our custom icon
                component: about, // our custom component
            },
            stripe: { // name of our custom icon
                component: stripe, // our custom component
            },
            contact_message: { // name of our custom icon
                component: contact_message, // our custom component
            },
            link: { // name of our custom icon
                component: link, // our custom component
            },
            phone: {
                component: phone
            },
            box: {
                component: box
            },
            box1: {
                component: box1
            },
            box2: {
                component: box2
            },
            equal: {
                component: equal
            },
            wave: {
                component: wave
            },
            arrow: {
                component: arrow
            },
            player: {
                component: player
            },
            arrow_left:{
                component:arrow_left
            }

        },
    },
});
