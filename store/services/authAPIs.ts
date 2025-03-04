import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const authAPIs = createApi({
    reducerPath: 'authAPIs',
    baseQuery: fetchBaseQuery({
        baseUrl: dummyApis,
        prepareHeaders: (headers, { getState }: any) => {
            const token = JSON.parse(localStorage.getItem("userToken")!);
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    // tagTypes: ['User'],
    endpoints: (builder) => ({

        userOTPVerify: builder.mutation<{}, any>({
            query: (data) => ({
                url: "verifyOTP",
                method: "POST",
                body: data
            })
        }),
        userResendVerification: builder.mutation<{}, any>({
            query: (data) => ({
                url: "resendVerificationOTP",
                method: "POST",
                body: data
            })
        }),
        userAdd: builder.mutation<{}, any>({
            query: (data) => ({
                url: 'add-user',
                method: "POST",
                body: data
            })
        }),
        userGetAll: builder.query<{}, any>({
            query: () => ({
                url: 'users',
                method: "GET",
                
            })
        }),
        userEdit: builder.mutation<{}, any>({
            query: () => ({
                url: ``,
                method: "PUT",
                body:""
            })
        }),
        userDelete: builder.mutation<{}, any>({
            query: (id) => ({
                url: `user/delete/${id}`,
                method: "DELETE",
            })
        }),
        userChangeRole: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url:`roleChange-user/${id}`,
                method: "PUT",
                body:data
            })
        }),

    })
})

export const {

    useUserOTPVerifyMutation,
    useUserResendVerificationMutation,
    useUserAddMutation,
    useUserGetAllQuery,
    useUserEditMutation,
    useUserDeleteMutation,
    useUserChangeRoleMutation,

} = authAPIs