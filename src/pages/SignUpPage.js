import React from "react";
import { useForm } from "react-hook-form";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { Label } from "../components/label";
import { Input } from "../components/input";
import FieldComponents from "../components/common/FieldComponents";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import useToggleValue from "../hook/useToggleValue";
import ButtonGoogle from "../components/button/ButtonGoogle";

const schema = yup.object().shape({
  name: yup.string().required("This field registered"),
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
const SignupPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignUp = (values) => {
    console.log(values);
  };
  const { value: acceptTerm, handleToggle: handleToggleTerm } =
    useToggleValue();
  const { value: toggleEye, handleToggle: handleToggleEye } = useToggleValue();

  return (
    <LayoutAuthentication heading="Sign Up" autoComplete="off">
      <p className="text-center font-normal text-[14px] text-text3 mb-[30px] sm:mb-[25px]">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google"></ButtonGoogle>
      <h2 className="text-center text-[14px] font-normal text-text2">
        Or sign up with email
      </h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FieldComponents>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            placeholder="Jhon Doe"
            type="text"
            name="name"
            errors={errors.name?.message}
          ></Input>
        </FieldComponents>
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
        <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
          <p className="flex-1 text-[14px] font-normal text-text2 sm:text-[12px]">
            I agree to the{" "}
            <span className="text-secondary underline">Tearms of Use</span> and
            have read and understand the{" "}
            <span className="text-secondary underline">Privacy policy.</span>
          </p>
        </Checkbox>
        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignupPage;
