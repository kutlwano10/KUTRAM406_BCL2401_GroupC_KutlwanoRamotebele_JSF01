import { data } from "autoprefixer";

export default () => ({
  isLoading: true,
  products: [],
  selectedProduct: {},
  isOpen : false,
  fetchProducts: async function () {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((data) => {
        this.isLoading = false;
        this.products = data;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log("Error fetching Product data:", error);
      });
  },
  fetchProductById: async function (id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.isLoading = false;
        this.selectedProduct = data;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log("Error fetching Product data:", error);
      });
  },
  openModal: async function (id) {
    await this.fetchProductById(id);
    this.isOpen = true;
  },
  getdata() {
    this.fetchProducts();
  },
});
