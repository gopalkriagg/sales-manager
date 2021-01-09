<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    width="400px"
    persistent
  >
    <v-card class="mx-auto">
      <v-card-title>
        Add Product
        <v-spacer />
        <v-btn icon @click="close">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Product Name"> </v-text-field>
        <v-text-field v-model="price" label="Price (Rs./kg)"> </v-text-field>
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
import { storeProduct } from '../api/products.api';

export default {
  data() {
    return {
      dialog: false,
      name: null,
      price: null,
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
      await storeProduct(this.name, this.price);
      this.$emit('created');
      this.close();
    },
  },
};
</script>
