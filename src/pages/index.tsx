import { lazy } from "react";
const Register = lazy(() => import("./register"));
const Login = lazy(() => import("./login"));
const ForgotPassword = lazy(() => import("./forgot-password"));
const Home = lazy(() => import("./home"));

export { Register, Login, ForgotPassword, Home };
