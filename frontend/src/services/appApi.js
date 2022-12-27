import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (build) => ({
    //mutations because we change things in the database
    signup: build.mutation({
      query: (user) => ({
        url: "/api/user/signup",
        method: "POST",
        body: user,
      }),
    }),

    login: build.mutation({
      query: (user) => ({
        url: "/api/user/login",
        method: "POST",
        body: user,
      }),
    }),

    //create product
    createProduct: build.mutation({
      query: (product) => ({
        url: "/api/product",
        method: "POST",
        body: product,
      }),
    }),

    deleteProduct: build.mutation({
      query: ({ product_id, user_id }) => ({
        url: `/api/product/${product_id}`,
        body: {
          user_id,
        },
        method: "DELETE",
      }),
    }),

    updateProduct: build.mutation({
      query: (product) => ({
        url: `/api/product/${product.id}`,
        body: product,
        method: "PATCH",
      }),
    }),

    addToCart: build.mutation({
      query: (cartInfo) => ({
        url: "/api/product/add-to-cart",
        body: cartInfo,
        method: "POST",
      }),
    }),

    removeFromCart: build.mutation({
      query: (body) => ({
        url: "/api/product/remove-from-cart",
        body,
        method: "POST",
      }),
    }),

    increaseCartProduct: build.mutation({
      query: (body) => ({
        url: "/api/product/increase-cart",
        body,
        method: "POST",
      }),
    }),

    decreaseCartProduct: build.mutation({
      query: (body) => ({
        url: "/api/product/decrease-cart",
        body,
        method: "POST",
      }),
    }),

    createOrder: build.mutation({
      query: (body) => ({
        url: "/api/order",
        method: "POST",
        body,
      }),
    }),

    // end
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useCreateOrderMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = appApi;
export default appApi;
