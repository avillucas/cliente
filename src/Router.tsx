import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./modules/Layout";
import LoginScreen from "./modules/auth/login/LoginScreen";
import { IndexScreen } from "./modules/pets/index/IndexScreen";
import RegisterScreen from "./modules/auth/register/RegisterScreen";
import { TokenGuard } from "./shared/token-guard";
import DetailScreen from "./modules/pets/detail/DetailScreen";
import { CreateScreen } from "./modules/pets/create/CreateScreen";
import { EditScreen } from "./modules/pets/edit/EditScreen";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/pets" replace />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />

          <Route element={<TokenGuard />}>
            <Route index path="/pets" element={<IndexScreen />} />
            <Route path="pets/create" element={<CreateScreen />} />
            <Route path="pets/edit/:id" element={<EditScreen />} />
            <Route path="pets/:id" element={<DetailScreen />} />
          </Route>

          <Route path="*" element={<Navigate to="/pets" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}