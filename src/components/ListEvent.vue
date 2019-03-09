<template v-for="event in lesEvents">
    <div>
        <p>Nom de l'evenement : {{event.title}}</p>
        <p>Date de debut : {{event.dateDebut}}</p>
        <p>Date de fin : {{event.dateFin}}</p>
        <p>Description : {{event.description}}</p>
        <p>{{event.idUser}}</p>
    </div>

</template>

<script>
    import {getAllEvents} from "../../helpers/apiHelper";
    export default {
        name: "listEvent",
        data: () => {
            return{lesEvents: []}

        },
        mounted(){
            this.lesEvents = getAllEvents()
        }
    }
</script>

<style scoped>

</style>