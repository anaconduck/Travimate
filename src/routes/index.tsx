import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PrivateRouteAdmin } from "./privateRoutes";
import { ProtectedRoute, ProtectedRouteAdmin } from "./protectedRoutes";
import HomePage from "../pages/clients/home";
import RegisterClient from "../pages/clients/register";
import LoginClient from "../pages/clients/login";
import SearchPage from "../pages/clients/search";
import OrderDetailsPage from "../pages/clients/order-details";
  
  const SetupRouters = () => {
    return (
      <Routes>
        {/*Landingpage Routes*/}
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterClient/>} />
        <Route path="/flight/search" element={<SearchPage/>} />

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
  