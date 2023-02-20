export interface ILoginType {
  email: string;
  password: string;
}

export interface IResponseLogin {
  role: string;
  token: string;
  user: ILoginUser;
}
export interface ILoginResponseDataType {
  data: IResponseLogin;
}

export interface ILoginUser {
  address: string;
  company_address: string;
  company_name: string;
  created_at: string;
  created_by: string;
  deleted_at: string;
  email: string;
  email_verified_at: string;
  expire_date: string;
  id: number;
  image: string;
  name: string;
  otp_code: number;
  phone: string;
  role_id: number;
  staff_crm_id: string;
  status: string;
  updated_at: string;
  updated_by: number;
  verify: string;
}

export interface HTTPResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  code?: number;
}
