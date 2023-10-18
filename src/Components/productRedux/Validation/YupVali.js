import * as Yup from "yup";

export const YuoVali = Yup.object({
  username: Yup.string
    .max(8, "please username too short")
    .matches(/^(?=.*[A-Z])/, "first capital letter must")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
  password: Yup.string
    .max(8, "please password too short")
    .matches(/^(?=.*[A-Z])/, "first capital letter must")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number"),
});
