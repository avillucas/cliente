import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./modules/Layout";
import LoginScreen from "./modules/auth/login/LoginScreen";
import RegisterScreen from "./modules/auth/register/RegisterScreen";
import { IndexScreen } from "./modules/pets/index/IndexScreen";
import { CreateScreen } from "./modules/pets/create/CreateScreen";
import { EditScreen }   from "./modules/pets/edit/EditScreen";
import { DetailScreen } from "./modules/pets/detail/DetailScreen";
import { TokenGuard } from "./services/tokeGuard";

export default function Router() {
    const location = useLocation();
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pets" element={<IndexScreen key={location.key} />} />
        <Route
          path="register"
          element={<RegisterScreen key={location.key} />}
        />
          <Route
          path="login"
          element={<LoginScreen key={location.key} />}
        />


        <Route element={<TokenGuard />}>
          <Route path="element" element={<IndexScreen key={location.key} />} />
          <Route
            path="element/create"
            element={<CreateScreen key={location.key} />}
          />
          <Route
            path="element/edit/:id"
            element={<EditScreen key={location.key} />}
          />
          <Route
            path="element/:id"
            element={<DetailScreen key={location.key} />}
          />
        </Route>

          <Route path="*" element={<Navigate to="/pets" replace />} />
        </Route>
      </Routes>
  );
}