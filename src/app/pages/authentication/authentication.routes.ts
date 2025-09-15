import { Routes } from "@angular/router";

import { ForgetPassword } from "./forget-password/forget-password";
import { LoginBgImage } from "./login-bg-image/login-bg-image";
import { LoginImageTwo } from "./login-image-two/login-image-two";
import { LoginSimple } from "./login-simple/login-simple";
import { LoginSweetalert } from "./login-sweetalert/login-sweetalert";
import { LoginTooltip } from "./login-tooltip/login-tooltip";
import { LoginValidation } from "./login-validation/login-validation";
import { Maintenance } from "./maintenance/maintenance";
import { RegisterImage } from "./register-image/register-image";
import { RegisterSimple } from "./register-simple/register-simple";
import { RegisterTwo } from "./register-two/register-two";
import { ResetPassword } from "./reset-password/reset-password";
import { UnlockUser } from "./unlock-user/unlock-user";

export default [
  {
    path: "login-simple",
    component: LoginSimple,
  },
  {
    path: "login-bg-image",
    component: LoginBgImage,
  },
  {
    path: "login-image-two",
    component: LoginImageTwo,
  },
  {
    path: "login-validation",
    component: LoginValidation,
  },
  {
    path: "login-tooltip",
    component: LoginTooltip,
  },
  {
    path: "login-sweetalert",
    component: LoginSweetalert,
  },
  {
    path: "register-simple",
    component: RegisterSimple,
  },
  {
    path: "register-image",
    component: RegisterImage,
  },
  {
    path: "register-image-two",
    component: RegisterTwo,
  },
  {
    path: "unlock-user",
    component: UnlockUser,
  },
  {
    path: "forget-password",
    component: ForgetPassword,
  },
  {
    path: "reset-password",
    component: ResetPassword,
  },
  {
    path: "maintenance",
    component: Maintenance,
  },
] as Routes;
