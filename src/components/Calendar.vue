<template>
    <v-layout>
        <v-flex>
            <v-sheet height="500">
                <v-calendar :now="today" :value="today" color="primary">
                    <template v-slot:day="{ date }">
                        <template v-for="event in eventsMap[date]">
                            <v-menu
                                    :key="event.title"
                                    v-model="event.open"
                                    full-width
                                    offset-x
                            >
                                <template v-slot:activator="{ on }">
                                    <div
                                            v-if="!event.time"
                                            v-ripple
                                            class="my-event"
                                            v-on="on"
                                            v-html="event.title"
                                    ></div>
                                </template>
                                <v-card color="grey lighten-4" min-width="350px" flat>
                                    <v-toolbar color="primary" dark>
                                        <v-btn icon @click="removeEvent">
                                            <v-icon>remove_circle</v-icon>
                                        </v-btn>
                                        <v-toolbar-title v-html="event.title"></v-toolbar-title>
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                    <v-card-title primary-title>
                                        <span v-html="event.details"></span>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn flat color="secondary">
                                            Cancel
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </template>
                    </template>
                </v-calendar>
            </v-sheet>
        </v-flex>
    </v-layout>
</template>

<script>
    import getAllEvents from "../../helpers/apiHelper.js";

    export default {
        name: "Calendar",
        data: () => ({
            today: "",
            events: [{
                title: 'Test',
                details: 'Ici on affiche le detail de l event',
                date: '2019-03-09',
                open: false
            }]
        }),
        computed: {
            eventsMap() {
                const map = {};
                this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
                return map;
            }
        },
        mounted: function () {
            this.refresh();
            this.getCurrentDate();
        },
        methods: {
            open(event) {
                alert(event.title);
            },
            getEvents() {
                return this.events
                //this.events = getAllEvents
            },
            refresh() {
                setTimeout(this.getEvents, 300);
            },
            removeEvent() {
                console.log("Vous avez demandé la supression de l'event !")
            },
            getCurrentDate() {
                var laDate = new Date();
                var dateFormatee = laDate.getHours() + "-" + laDate.getMonth() + "-" + laDate.getDay()
                return this.today = dateFormatee;
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .my-event {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 2px;
        background-color: #1867c0;
        color: #ffffff;
        border: 1px solid #1867c0;
        width: 100%;
        font-size: 12px;
        padding: 3px;
        cursor: pointer;
        margin-bottom: 1px;
    }
</style>
