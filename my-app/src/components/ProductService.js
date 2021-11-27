import http from "./http-common";

const getAll = () => {
    return http.get("/products");
};

const get = id => {
    return http.get(`/products${id}`);
};

const create = data => {
    return http.post("/products", data);
};

const update = (data) => {
    return http.put("/products", data);
};

const search = infix => {
  return http.get(`/products/infix/${infix}`)
};

const remove = id => {
    return http.delete(`/products${id}`);
};

const removeAll = () => {
    return http.delete(`/products`);
};

const findByName = name => {
    return http.get(`/products?name=${name}`);
};

export default {
    getAll,
    get,
    create,
    search,
    update,
    remove,
    removeAll,
    findByName
};