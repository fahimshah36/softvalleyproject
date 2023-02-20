import async from "../../../app/async";
import {api} from "../../../app/baseReq";
import {HTTPResponse} from "../../../auth/authTypes";
import {
  IAssigneeDataType,
  ILeadData,
  ILeadDataType,
  ILeadReqFormData,
  ISourceDataType,
  IStatusDataType,
} from "../types/leadsTypes";

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStatus: build.query<HTTPResponse<IStatusDataType[]>, void>({
      query: () => ({
        url: `/admin/base/lead-status`,
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
      }),
      providesTags: [{type: "Leads"}],
    }),
    getSource: build.query<HTTPResponse<ISourceDataType[]>, void>({
      query: () => ({
        url: `/admin/base/source`,
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
      }),
      providesTags: [{type: "Leads"}],
    }),

    getAssignee: build.query<HTTPResponse<IAssigneeDataType[]>, void>({
      query: () => ({
        url: `/admin/base/assignee`,
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
      }),
      providesTags: [{type: "Leads"}],
    }),

    //filtering data
    filterData: build.mutation<HTTPResponse<ILeadData>, ILeadReqFormData>({
      query: (body) => ({
        url: "/admin/lead/list?page=1&limit=10",
        method: "POST",
        body: body,
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
      }),

      invalidatesTags: () => [{type: "Leads"}],
    }),
  }),
});

export const {
  useGetStatusQuery,
  useGetSourceQuery,
  useGetAssigneeQuery,
  useFilterDataMutation,
} = loginApi;
