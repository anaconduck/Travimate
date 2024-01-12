import Cookies from "js-cookie";

const AuthAdmin = {
    isAuthorization() {
        if (Cookies.get("token") || Cookies.get("refresh")) return true;
        return null;
    },
    getAccessToken() {
        return Cookies.get("token");
    },
    getRefreshToken() {
        return Cookies.get("refresh");
    },

    signOut(navigate:any) {
        Cookies.remove("token");
        Cookies.remove("refresh");
        navigate("/login");
    },

    storeUserInfoToCookie(data:any) {
        if (!data.access_token || !data.refresh_token) return null;
        const { access_token, refresh_token } = data;
        Cookies.set("token", access_token);
        Cookies.set("refresh", refresh_token);
        return data;
    },
};

export default AuthAdmin;