import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PrivateRouteAdmin } from "./privateRoutes";
import { ProtectedRoute, ProtectedRouteAdmin } from "./protectedRoutes";
import HomePage from "../pages/clients/home";
import RegisterClient from "../pages/clients/register";
import LoginClient from "../pages/clients/login";
import SearchPage from "../pages/clients/search";
import OrderDetailsPage from "../pages/clients/order-details";
import ProfilePage from "../pages/clients/usermenu";
import ForgetPassword from "../pages/clients/forget-password";
import WaitingPayment from "../section/clients/waiting-payment";
import PaymentAccepted from "../section/clients/payment-accepted";
import CardPayment from "../section/clients/card-payment";
import PaymentNavbar from "../section/clients/payment-navbar";
import Payment from "../pages/clients/payment";
import UserMenuPage from "../pages/clients/usermenu";
  
  const SetupRouters = () => {
    return (
      <Routes>
        {/*Landingpage Routes*/}
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterClient/>} />
        <Route path="/flight/search" element={<SearchPage/>} />
        <Route path="/profile" element={<UserMenuPage/>} />
        <Route path="/history" element={<UserMenuPage/>} />
        <Route path="/checkin" element={<UserMenuPage/>} />
        <Route path="/notification" element={<UserMenuPage/>} />
        <Route path="/logout" element={<UserMenuPage/>} />

        <Route path="/forgot-password" element={<ForgetPassword/>} />

        {/* ini alfi */}
        <Route path="/payment" element={<Payment/>} />

        {/*Protected Routes*/}
        <Route path="flight" element={<PrivateRoute />}>
          <Route path="order-details" element={<OrderDetailsPage/>} />
        </Route>

        <Route path="home" element={<PrivateRoute />}>
          <Route path="payment" element={''} />
          <Route path="profile" element={''} />
        </Route>

  
        {/*Private Routes*/}
        <Route path="/login" element={<ProtectedRoute />}>
          <Route index element={<LoginClient/>} />
        </Route>
  
        {/*Notfound Routes*/}
        <Route path="*" element={''} />


        {/* ==================================================================================== Admin ==================================================================================== */}
        {/*Protected Routes*/}
        <Route path="/dashboard" element={<PrivateRouteAdmin />}>
          <Route path="home" element={''} />
        </Route>
  
        {/*Private Routes*/}
        <Route path="/admin-login" element={<ProtectedRouteAdmin />}>
          <Route index element={''} />
        </Route>
      </Routes>
    );
  };
  
  export default SetupRouters;
  