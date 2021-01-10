<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    width="400px"
    persistent
  >
    <v-card class="mx-auto">
      <v-card-title>
        Add Client
        <v-spacer />
        <v-btn icon @click="close">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Client Name"> </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">
          Cancel
        </v-btn>
        <v-btn color="primary" @click="submit">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { storeClient } from '../api/clients.api';

export default {
  data() {
    return {
      dialog: false,
      name: null,
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    async submit() {
      await storeClient(this.name);
      this.$emit('created');
      this.close();
    },
  },
};
</script>
