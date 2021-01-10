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
    <v-btn color="primary" @click="openAddEditOrderModal">
      Add Order
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      class="elevation-1"
    />
    <add-edit-order ref="addEditOrder" />
  </div>
</template>

<script>
import { getClient } from '../api/clients.api';
import { getOrdersForClient } from '../api/orders.api';

import AddEditOrder from '../components/AddEditOrder.vue';

export default {
  components: {
    AddEditOrder,
  },
  data() {
    return {
      client: {
        name: null,
      },
      headers: [
        {
          text: 'Order Date',
          align: 'start',
          value: 'order',
        },
      ],
      orders: [],
    };
  },
  created() {
    this.getClient();
    this.getOrdersForClient();
  },
  methods: {
    async getClient() {
      const response = await getClient(this.$route.params.id);
      this.client = response.data;
      console.log(this.client);
    },
    async getOrdersForClient() {
      const response = await getOrdersForClient(this.$route.params.id);
      console.log(response.data);
    },
    openAddEditOrderModal() {
      this.$refs.addEditOrder.open();
    },
  },
};
</script>

<style></style>
