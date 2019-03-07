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

                    <v-select
                            v-model="select"
                            :items="items"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                    ></v-select>

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
    import {addUnEvent} from "../../helpers/apiHelper"
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
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ]
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    var id = this.generateIdEvent();
                    console.log(id, this.title, this.description, sessionStorage.getItem("idUser"));
                    addUnEvent()
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
