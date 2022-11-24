import React from "react";
import { useForm } from "react-hook-form";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "../components/label";
import { Input } from "../components/input";
import FieldComponents from "../components/common/FieldComponents";
import { Button, ButtonGoogle } from "../components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import useToggleValue from "../hook/useToggleValue";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("This email already registered ")
    .required("This field registered"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignIn = (values) => {
    console.log(values);
  };
  const { value: toggleEye, handleToggle: handleToggleEye } = useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back">
      <p className="text-center font-normal text-[14px] text-text3 mb-[30px] ">
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-medium text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FieldComponents>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            placeholder="example@gmail.com"
            name="email"
            errors={errors.email?.message}
          ></Input>
        </FieldComponents>
        <FieldComponents>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            type={toggleEye ? "text" : "password"}
            placeholder="Create a password"
            name="password"
            errors={errors.password?.message}
          >
            <IconEyeToggle onClick={handleToggleEye}></IconEyeToggle>
          </Input>
        </FieldComponents>
        <FieldComponents>
          <span className="text-primary text-[14px] font-medium text-right cursor-pointer">
            Forgot password
          </span>
        </FieldComponents>
        <Button type="submit" className="w-full" kind="primary">
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
