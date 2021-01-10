<template>
  <div>
    Client Name: {{ client.name }} <br />
    Client Created on: sss <br />
    Client Edited on: asdfd <br />

    Total Amount <br />
    Last Balance Amount <br />
    Paid Amount <br />
    Balance <br />

    Create New Order <br />
    Past orders: <br />
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      class="elevation-1"
    />
  </div>
</template>

<script>
import { getClient } from '../api/clients.api';
export default {
  data() {
    return {
      client: {
        name: null,
        headers: [
          {
            text: 'Order Date',
            align: 'start',
            value: 'order',
          },
        ],
        orders: [],
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
    },
  },
};
</script>

<style></style>
