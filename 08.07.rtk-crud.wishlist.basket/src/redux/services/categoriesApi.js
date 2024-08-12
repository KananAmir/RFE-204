import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
      providesTags: ["Categories", "Category"],
    }),
    getCategoryById: builder.query({
      query: (id) => `categories/${id}`,
      providesTags: ["Category"],
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    postCategory: builder.mutation({
      query: (payload) => ({
        url: `categories`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Categories"],
    }),
    editCategory: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `categories/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Categories", "Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useDeleteCategoryByIdMutation,
  usePostCategoryMutation,
  useEditCategoryMutation,
} = categoriesApi;
