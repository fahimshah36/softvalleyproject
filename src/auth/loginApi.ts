import async from "../app/async";
import {api} from "../app/baseReq";
import {toasterNotification} from "../components/assets/ToasterNotification";
import {ILoginResponseDataType, ILoginType} from "./authTypes";

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginResponseDataType, ILoginType>({
      query: (body) => ({
        url: "/admin/login",
        method: "POST",
        body: body,
      }),

      onQueryStarted: (arg, {queryFulfilled}) => {
        async(async () => {
          await queryFulfilled;
          toasterNotification("success", "Successfully Logged In");
        });
      },
      invalidatesTags: () => [{type: "Login"}],
    }),
  }),
});

export const {useLoginMutation} = loginApi;
