import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const LoginForm = lazy(() => import("@/components/auth/LoginForm"));
const RegisterForm = lazy(() => import("@/components/auth/RegisterForm"));
const ProtectedRoute = lazy(() => import("@/components/auth/ProtectedRoute"));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <h1 className="bg-red-600 text-white">Dashboard</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;