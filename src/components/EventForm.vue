<template>
    <v-app dark id="inspire">
    <v-content>
        <v-container fill-height>
            <v-layout align-center justify-center>
                <v-form
                        ref="form"
                        v-model="eventAdd"
                        lazy-validation
                >
                    <v-text-field
                            v-model="title"
                            :rules="titleRules"
                            label="Nom de l'évènement"
                            required
                    ></v-text-field>


                    <v-text-field
                            v-model="description"
                            :rules="descRules"
                            label="Description de l'event"
                            required
                    ></v-text-field>

                    <v-layout row wrap>
                            <span>Date début :</span>
                            <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="dateDebut"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="450px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="dateDebut"
                                            label="Picker in menu"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="dateDebut" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(dateDebut)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        <v-spacer></v-spacer>
                    </v-layout>
                    <v-layout row wrap>
                            <span>Date de fin :</span>
                            <v-menu
                                    ref="menu2"
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="dateFin"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="450px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="dateFin"
                                            label="Picker in menu"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="dateFin" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu2.save(dateFin)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        <v-spacer></v-spacer>
                    </v-layout>
                    <v-btn
                            :disabled="!valid"
                            color="success"
                            @click="validate"
                    >
                        Validate
                    </v-btn>

                </v-form>
            </v-layout>
        </v-container>
    </v-content>
    </v-app>

</template>

<script>
    import {addUnEvent} from "../../helpers/apiHelper";
    import router from "../router";
    export default {
        name: "EventForm",
        data: () => ({
            valid: true,
            title: '',
            titleRules: [
                v => !!v || 'Le nom est requis',
            ],
            description: '',
            descRules: [
                v => !!v || 'La description est requise',
            ],
            dateDebut: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            dateFin : new Date().toISOString().substr(0, 10),
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    var id = this.generateIdEvent();
                    console.log(id, this.title,this.dateDebut, this.dateFin,this.description,sessionStorage.getItem("idUser"));
                    addUnEvent(id, this.title,this.dateDebut, this.dateFin,this.description,sessionStorage.getItem("idUser"));
                    this.reset();
                    router.push("/")
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            generateIdEvent() {
                return Math.round(Math.random()*(600-1)+1);
            }
        }
    }
</script>
