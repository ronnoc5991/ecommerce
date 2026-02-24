import fetchAllProducts from "./fetchAllProducts";
import fetchCatalog from "./fetchCatalog";
import fetchCategory from "./fetchCategory";
import fetchProduct from "./fetchProduct";

// TODO: rethink how to shape these things... rethink api design

const catalogService = {
  products: {
    getAll: fetchAllProducts,
    getOne: fetchProduct,
  },
  catalog: {
    get: fetchCatalog,
  },
  category: {
    getOne: fetchCategory,
  },
};

export default catalogService;
