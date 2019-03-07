<template>
    <div>
    <v-navigation-drawer app clipped fixed v-model="drawer">
        <v-list dense>
            <v-list-tile v-if="!isConnect">
                <v-dialog max-width="600px" persistent v-model="dialogRegister">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on" ><v-icon>power</v-icon>S'enregistrer</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                    <span class="headline"
                    >Enregistrement sur l'application</span
                    >
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                                label="Email*"
                                                required
                                                v-model="email"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                                label="Password*"
                                                required
                                                type="password"
                                                v-model="pass"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*champs requis</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="closeRegisterUser" color="blue darken-1" flat
                            >Fermer
                            </v-btn>
                            <v-btn
                                    @click="handleSaveRegisterUser"
                                    color="blue darken-1"
                                    flat
                            >Sauvegarder
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list-tile>
            <v-list-tile v-if="!isConnect">
                <v-dialog max-width="600px" persistent v-model="dialogConnect">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on"><v-icon>power</v-icon>Se connecter</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Se connecter sur l'application</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <p>
                                        Veuillez vous connecter sur l'application avec vos
                                        identifiants !
                                    </p>
                                    <v-flex xs12>
                                        <v-text-field label="Email*" required v-model="email"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                                label="Password*"
                                                required
                                                type="password"
                                                v-model="pass"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <small>*champs requis</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="closeLoginUser" color="blue darken-1" flat
                            >Fermer
                            </v-btn>
                            <v-btn
                                    @click="handleSaveLoginUser"
                                    color="blue darken-1"
                                    flat
                            >Sauvegarder
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list-tile>
            <v-list-tile v-if="isConnect">
                <v-btn color="primary" dark v-on="on" @click="deconnect"><v-icon>power-standby</v-icon>Se déconnecter</v-btn>
            </v-list-tile>
            <v-list-tile v-if="isConnect">
                <router-link to="/event/add"><v-btn><v-icon>add_circle</v-icon>&nbsp;Ajouter un evènement</v-btn></router-link>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left color="blue" dense fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="mr-5 align-center">
            <span class="title">Calendrier</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    </div>
</template>

<script>
    import { createUser, seConnecter } from "../../helpers/apiHelper";
    export default {
        name: "navBar",
        data: () => ({
            drawer: null,
            dialogRegister: true,
            dialogConnect: false,
            email: "",
            pass: "",
            isConnect: false
        }),
        props: {
            source: String
        },
        methods: {
            clear() {
                this.email = "";
                this.pass = "";
            },
            handleSaveRegisterUser() {
                if (!this.email || !this.pass) {
                    alert("Veuillez remplir touts les champs");
                } else {
                    createUser(this.email, this.pass);
                    this.clear();
                    this.dialogRegister = false;
                    this.dialogConnect = true;
                }
            },
            handleSaveLoginUser() {
                if (!this.email || !this.pass) {
                    alert("Veuillez remplir touts les champs");
                } else {
                    seConnecter(this.email, this.pass);
                    this.clear();
                    this.dialogRegister = false;
                    this.dialogConnect = false;
                    this.isConnect = true;
                }
            },
            closeLoginUser() {
                this.clear();
                this.dialogConnect = false;
            },
            closeRegisterUser() {
                this.clear();
                this.dialogRegister = false;
            },
            deconnect() {
                this.isConnect = false;
                sessionStorage.clear();
            }
        }
    }
</script>

<style scoped>

</style>