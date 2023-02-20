import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query";

const url = process.env.REACT_APP_BASE_URL;

export const api = createApi({
  reducerPath: "api",
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({baseUrl: url}),
  endpoints: () => ({}),
  tagTypes: ["Login", "Leads"],
});
