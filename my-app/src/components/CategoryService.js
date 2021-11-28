import httpHandler from "./HttpHandler"

const getAllCategories = () => {
    return httpHandler.get("/categories");
};

const getCategory = id => {
    return httpHandler.get(`/categories/${id}`);
};

const createCategory = data => {
    return httpHandler.post("/categories", data);
};

const updateCategory = (data) => {
    return httpHandler.put("/categories", data);
};

const searchCategory = infix => {
  return httpHandler.get(`/categories/infix/${infix}`)
};

const removeCategory = id => {
    return httpHandler.delete(`/categories/${id}`);
};

const removeAllCategories = () => {
    return httpHandler.delete(`/categories`);
};

export default {
    getAllCategories,
    getCategory,
    createCategory,
    searchCategory,
    updateCategory,
    removeCategory,
    removeAllCategories,
};