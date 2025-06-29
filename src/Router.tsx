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
        <Route index element={<Navigate to="/pets" replace />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route element={<TokenGuard />}>
          <Route path="/pets" element={<IndexScreen />} />
          <Route path="/pets/create" element={<CreateScreen />} />
          <Route path="/pets/edit/:id" element={<EditScreen />} />
          <Route path="/pets/:id" element={<DetailScreen />} />
        </Route>

        <Route path="*" element={<Navigate to="/pets" replace />} />
      </Route>
    </Routes>
  );
}
