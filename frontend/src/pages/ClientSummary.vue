<template>
  <div>
    Client Name: {{ client.name }}
    Client Created on: sss
    Client Edited on: asdfd

    Total Amount
    Last Balance Amount
    Paid Amount
    Balance

    Create New Order
    Past orders:

  </div>
</template>

<script>
import { getClient } from '../api/clients.api';
export default {
  data() {
    return {
      client: {
        name: null,
      },
    };
  },
  created() {
    this.getClient();
  },
  methods: {
    async getClient() {
      const response = await getClient(this.$route.params.id);
      this.client = response.data;
      console.log(this.client);
    }
  }
}
</script>

<style>

</style>