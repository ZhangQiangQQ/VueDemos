export interface RootState {
  hasLogin: boolean;
  userInfo: any;
  constants: {
    initialized: false,
    enterpriseForm: [],
    industryTypes: [],
    positionCatalogs: [],
    districts: [],
    options: {},
  }
}
