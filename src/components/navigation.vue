<template>
    <div style="margin-top: 50px;
            margin-left: 5%;margin-right: 5%;">
        <div>
            <div style="margin-top: -30px" class="text-right">
                <v-icon @click="send" small color="#052137">mdi-close</v-icon>
            </div>
            <v-card class="card_image mb-2 pb-8" style="border-radius: 15px;" flat>
                <v-img
                        class="profile_image ma-0 pa-0"
                        src="../assets/images/profile.jpg"

                />
            </v-card>
            <button @click="payopen" style="width: 125px"
                    class="social_icon mb-6">
                <v-icon class="mr-2" small>$message</v-icon>
                <span style="color: white;font-weight: bold;font-size: 90%"> Hire Me</span>
            </button>
        </div>
        <h1 class="name mb-3">Samuel Raita</h1>
        <h3 class="professions">Graphic Designer</h3>

        <h4 style="color:#052137 ">About me</h4>
        <p class="description text-justify">
            Donec a augue gravida, vulputate ligula et, pellentesque arcu. Morbi feugiat eros nec sem ultrices, et
            venenatis velit posuere. Donec bibendum commodo dui, eget sollicitudin urna sagittis non. Donec ac commodo
            tortor..Donec a augue gravida, vulputate ligula et, pellentesque arcu. Morbi feugiat eros nec sem ultrices,


        </p>

        <div class="main hidden-md-and-up" style="display: inline">
            <p class="rate">Hour Rate</p>
            <p class="rate1">$20 </p>
            <p class="avail">weekly Availability <span style="margin-top: -4px" class="rate1 ml-2">250</span></p>

        </div>


        <div class="social hidden-md-and-up">
            <h4 class="mb-2">Follow me</h4>
            <button class="social_icon mr-4">
                <v-icon style="fill: #7EC3D2;" small>$twitter</v-icon>
            </button>
            <button class="social_icon mr-4">
                <v-icon style="fill: #434FBE;" small>$facebook</v-icon>
            </button>
            <button class="social_icon mr-md-3">
                <v-icon style="fill: #F40FED;" small>$insta</v-icon>
            </button>

        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialog: false,
                drawer: null,
            }
        },
        methods:
            {
                send() {
                    this.drawer = false;
                    EventBus.$emit('newdrawer', this.drawer);
                },
                payopen() {
                    this.dialog=true,
                    EventBus.$emit('newPayOpen', this.dialog);
                }
            }
    }
</script>
<style scoped>
    .social_icon {
        padding: 8px 12px 8px 12px;
        background: #052137;
        border-radius: 5px;
    }

    .card_image {


        height: 125px;
        width: 125px;
    }

    .profile_image {
        height: 125px;
        width: 125px;

    }

    .social_icon {
        padding: 4px 8px 4px 8px;
        background: #052137;
        border-radius: 3px;
    }

    .social {
        padding-top: 30px;
        padding-right: 30px;
    }

    .name {
        font-size: 160%;
        font-weight: 800;
        line-height: 6px;
        color: #052137;
        margin-bottom: 10px;
    }

    .professions {

        font-style: normal;
        font-weight: bold;
        font-size: 90%;
        color: #052137;
        margin-bottom: 15px;


    }

    .description {
        font-style: normal;
        font-weight: normal;
        font-size: 80%;
        color: #052137;
        margin-bottom: 25px;

    }

    .rate {


        font-weight: normal;
        font-size: 90%;
        line-height: 21px;
        display: inline-flex;
        margin-right: 10px;
    }

    .rate1 {


        font-weight: 900;
        font-size: 110%;
        line-height: 30px;
        display: inline-flex;
        color: #052137;
        margin-right: 15px;
    }

    .avail {

        font-weight: normal;
        font-size: 90%;
        line-height: 21px;
        display: inline-flex;
        margin-right: 10px;

    }
</style>