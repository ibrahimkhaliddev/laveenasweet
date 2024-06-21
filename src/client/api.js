import api from "./api-client";

export const getProducts = (params) => api.post("method/erpnext.e_commerce.api.get_product_filter_data", params)
    .then((res) => res.data.message)

export const getTier = (params) => api.post("method/loyalty_program_customizations.overrides.get_tier", params).then((res) => res.data.message)