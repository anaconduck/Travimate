import travimate from "../travimate";
import Auth from "../../utils/auth";

const APIAuth = {
  async signin(payload:any) {
    try {
      const { email, password } = payload;
      const response = await travimate.post("/login", { email, password });
      Auth.storeUserInfoToCookie(response.data);
      return response.data;
    } catch (error:any) {
      const { message } = error.response.data;
      throw new Error(message);
    }
  },
};

const APIAuthAdmin = {
    async signin(payload:any) {
      try {
        const { email, password } = payload;
        const response = await travimate.post("/login", { email, password });
        Auth.storeUserInfoToCookie(response.data);
        return response.data;
      } catch (error:any) {
        const { message } = error.response.data;
        throw new Error(message);
      }
    },
  };

export {
    APIAuth,
    APIAuthAdmin
};
