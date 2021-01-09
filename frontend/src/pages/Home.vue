<template>
  <div>
    <v-card width="1000">
      <v-card-title>
        <v-row>
          <v-col cols="2">
            <v-btn color="primary" @click="openAddClientModal">
              Add Client
            </v-btn>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="clients"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      />
    </v-card>
    <add-edit-client ref="addEditClient" />
  </div>
</template>

<script>
import { getClients } from '../api/clients.api';
import AddEditClient from '../components/AddEditClient.vue';
export default {
  components: { AddEditClient },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Client',
          align: 'start',
          value: 'name',
        },
      ],
      clients: [],
    };
  },
  created() {
    this.fetchClients();
  },
  methods: {
    async fetchClients() {
      const response = await getClients();
      this.clients = response.data;
    },
    openAddClientModal() {
      this.$refs.addEditClient.open();
    },
  },
};
</script>
