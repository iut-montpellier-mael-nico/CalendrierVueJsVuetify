<template>
  <v-app
          id="inspire"
          dark
  >
    <v-navigation-drawer
            v-model="drawer"
            fixed
            clipped
            app
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text"  @click="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">Gestion des évènements</v-subheader>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            color="blue"
            dense
            fixed
            clipped-left
            app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Calendrier</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
            <Calendrier/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import Calendrier from ".././components/Calendar.vue";
    export default {
        name: "accueil",
        components : {Calendrier},
        data: () => ({
            drawer: null,
            items: [
                { icon: 'calendar-plus', text: 'Ajouter un evenement', route: '/titi'},
                { icon: 'subscriptions', text: 'Se Connecter', route: '/roger'},
                { icon: 'history', text: 'S enregistrer' },
                { icon: 'featured_play_list', text: 'Se déconnecter' }
            ]
        }),
        props: {
            source: String
        }
    }
</script>
