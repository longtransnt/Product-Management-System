import httpHandler from "./HttpHandler";

const getAllProducts = () => {
    return httpHandler.get("/products");
};

const getProduct = id => {
    return httpHandler.get(`/products/${id}`);
};

const createProduct = data => {
    return httpHandler.post("/products", data);
};

const updateProduct = (data) => {
    return httpHandler.put("/products", data);
};

const searchProduct = infix => {
  return httpHandler.get(`/products/infix/${infix}`)
};

const removeProduct = id => {
    return httpHandler.delete(`/products/${id}`);
};

const removeAllProducts = () => {
    return httpHandler.delete(`/products`);
};

const findByProductName = name => {
    return httpHandler.get(`/products?name=${name}`);
};

export default {
    getAllProducts,
    getProduct,
    createProduct,
    searchProduct,
    updateProduct,
    removeProduct,
    removeAllProducts,
    findByProductName
};