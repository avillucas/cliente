import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./modules/Layout";
import LoginScreen from "./modules/auth/login/LoginScreen";
import RegisterScreen from "./modules/auth/register/RegisterScreen";
import { IndexScreen } from "./modules/pets/index/IndexScreen";
import { TokenGuard } from "./services/tokeGuard";

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
          </Route>
          <Route path="*" element={<Navigate to="/pets" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}