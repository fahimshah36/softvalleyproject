export interface IStatusDataType {
  name: string;
  id: number;
}

export interface ILeadReqFormData {
  search: string;
  lead_status_id: number[];
  source_id: number[];
  user_id: number[];
  contact_date?: string[];
  contacted_date_from: string;
  contacted_date_to: string;
}

export interface ILeadDataType {
  name: string;
  phone: string;
  followup_date: string;
  email: string;
  lead_assignees: IAssigneeDataType[];
  lead_preferred_countries: ICountryDataType[];
  lead_status: ILeadStatusDataType;
  source: ILeadSourceDataType;
}

export interface ILeadData {
  data: ILeadDataType[];
}

export interface ISourceDataType extends IStatusDataType {}
export interface IAssigneeDataType extends IStatusDataType {}
export interface ICountryDataType extends IStatusDataType {}
export interface ILeadSourceDataType extends IStatusDataType {}
export interface ILeadStatusDataType extends IStatusDataType {
  color: string;
}
