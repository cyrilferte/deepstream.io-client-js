<template>
    <div class="client-component" :id="'client-' + clientId">
      <b-row>
        <div class="col-lg-12">
            <Connection :client="client" :server-address="serverAddress"/>
            <ErrorLogger :client="client"/>
            <Auth :client="client"/>
            <Records :listener="listener" :client="client"/>
            <Events :listener="listener" :client="client"/>
            <Rpcs :client="client"/>
            <Presence :client="client" :server-address="serverAddress"/>
        </div>
      </b-row>
    </div>
</template>

<script>
import Records from "./Records.vue"
import Auth from "./Auth.vue"
import Connection from "./Connection.vue"
import Events from "./Events.vue"
import Rpcs from "./Rpcs.vue"
import Presence from "./Presence.vue"
import ErrorLogger from "./ErrorLogger.vue"

export default {
  name: "client",
  props: ["clientId", "listener", "client", "serverAddress"],
  created: function () {
    this.listener.login({}, () => {
      console.log('listener logged in')
    })
  },
  beforeDestroy: function() {
    this.client.close()
  },
  data() {
    return {
      title: "deepstream.io test dashboard"
    }
  },
  components: {
    Connection,
    Records,
    Auth,
    Events,
    Rpcs,
    Presence,
    ErrorLogger
  }
};
</script>

<style scoped>

</style>
