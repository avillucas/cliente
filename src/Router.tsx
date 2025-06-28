import {  Routes, Route, Navigate } from "react-router-dom";
import Layout from "./modules/Layout";
import LoginScreen from "./modules/auth/login/LoginScreen";
import RegisterScreen from "./modules/auth/register/RegisterScreen";
import { IndexScreen } from "./modules/pets/index/IndexScreen";
import { CreateScreen } from "./modules/pets/create/CreateScreen";
import { EditScreen } from "./modules/pets/edit/EditScreen";
import { DetailScreen } from "./modules/pets/detail/DetailScreen";
import { TokenGuard } from "./services/tokeGuard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="pets" element={<IndexScreen />} />
        <Route index element={<Navigate to="/pets" replace />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route element={<TokenGuard />}>
          <Route path="element" element={<IndexScreen />} />
          <Route path="element/create" element={<CreateScreen />} />
          <Route path="element/edit/:id" element={<EditScreen />} />
          <Route path="element/:id" element={<DetailScreen />} />
        </Route>

        <Route path="*" element={<Navigate to="/pets" replace />} />
      </Route>
    </Routes>
  );
}
