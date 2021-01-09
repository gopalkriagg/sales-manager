<template>
  <div>
    <v-card width="1000">
      <v-card-title>
        <v-row>
          <v-col cols="2">
            <v-btn color="primary" @click="openAddProductModal">
              Add Product
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
        :items="products"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      />
    </v-card>
    <add-edit-product ref="addEditProduct" @created="fetchProducts" />
  </div>
</template>

<script>
import { getProducts } from '../api/products.api';
import AddEditProduct from '../components/AddEditProduct.vue';

export default {
  components: { AddEditProduct },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Product',
          align: 'start',
          value: 'name',
        },
        {
          text: 'Price',
          align: 'start',
          value: 'price',
        },
      ],
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const response = await getProducts();
      this.products = response.data;
    },
    openAddProductModal() {
      this.$refs.addEditProduct.open();
    },
  },
};
</script>

<style></style>
