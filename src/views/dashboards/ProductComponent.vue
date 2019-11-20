<template>
    <div class="table-responsive-sm">
        <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col" class="headTable">#</th>
                <th scope="col" class="headTable">Product Name</th>
                <th scope="col" class="headTable">Price</th>
                <th scope="col" class="headTable">Item Condition</th>
                <th scope="col" class="headTable">Category</th>
                <th scope="col" class="headTable">Seller</th>
                <th scope="col" class="headTable">Created Date</th>
                <th scope="col" class="headTable">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products"
                :key="product.item_id">
                <th scope="row" class="bodyTable">{{ product.item_id }}</th>
                <td class="bodyTable">{{ product.product_name }}</td>
                <td class="bodyTable">{{ product.product_price }}</td>
                <td class="bodyTable">{{ product.item_condition }}</td>
                <td class="bodyTable">{{ product.category }}</td>
                <td class="bodyTable">{{ product.seller_name }}</td>
                <td class="bodyTable">{{ product.created_date }}</td>
                <td class="bodyTable"><button class="btn btn-danger delete-btn"><i class="fa fa-trash"></i></button></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex'
export default {
   computed:  mapState({
    products: state => state.products.prods,
  }),
  created () {
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>
