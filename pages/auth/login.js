import * as Yup from "yup";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { useFormatError } from "../../hooks/useFormatError";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid e-mail address")
    .required("E-mail field is required"),
  password: Yup.string()
    .min(8, "Your password should be more than 8 characters")
    .required("Password field is required"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { error, signInWithEmail } = useAuth();
  const { formatAuthError } = useFormatError();

  return (
    <div className="min-w-full min-h-screen flex justify-center align-center p-8">
      <Head>
        <meta name="Alexandria - Register" content="" />
        <title>Alexandria - Log in</title>
      </Head>
      <Image src="/ornament.svg" layout="fill" className="z-0 object-cover" />
      <div className="flex flex-col align-center self-center shadow-2xl rounded-2xl bg-primary-white z-10 py-12 px-12">
        <div className="flex flex-col justify-center items-center space-y-4 pb-6">
          <div className="self-center flex w-full justify-center items-center space-x-2">
            <Image
              src="/logo.png"
              height="60"
              width="60"
              className="aspect-square"
            />
          </div>
          <h3 className="font-mono text-sm lg:text-md text-center tracking-wide text-major-text">
            <span>
              Log in to{" "}
              <strong className="font-medium text-primary-black">
                Alexandria {" "}
              </strong>
              and 
            </span>
            <br />
            continue your notetaking voyage!
          </h3>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            await signInWithEmail(values.email, values.password);
          }}
        >
          {({ errors, touched }) => {
            return (
              <Form className="flex flex-col">
                <div className="w-full">
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="border border-primary-border w-full focus:border-primary-blue outline-none rounded-md flex-1 px-4 py-3.5 duration-200 mt-3.5"
                    placeholder="E-mail address..."
                  />
                  {errors.email && touched.email ? (
                    <p className="mt-1.5 ml-1.5 text-xs text-red-500 opacity-70">
                      *{errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="w-full">
                  <div className="flex align-center justify-center mt-3.5">
                    <Field
                      name="password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="border border-primary-border focus:border-primary-blue outline-none rounded-md flex-1 px-4 py-3.5 duration-200"
                      placeholder="Password..."
                    />
                    {
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <AiOutlineEye
                            size={20}
                            className="ml-4 self-center text-major-text cursor-pointer"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            size={20}
                            className="ml-4 self-center text-major-text cursor-pointer"
                          />
                        )}
                      </button>
                    }
                  </div>
                  {errors.password && touched.password ? (
                    <p className="mt-1.5 ml-1.5 text-xs text-red-500 opacity-70">
                      *{errors.password}
                    </p>
                  ) : null}
                </div>
                <button
                  className="bg-primary-blue text-primary-bg hover:bg-active-blue rounded-md text-medium border px-4 py-3 duration-200 mt-5"
                  type="submit"
                >
                  Log in
                </button>
                {error && (
                  <p className="mt-2 ml-1.5 text-xs text-red-500 opacity-70 normal-case">
                    *{
                        formatAuthError(error)
                    }
                  </p>
                )}
              </Form>
            );
          }}
        </Formik>
        <p className="text-minor-text self-center text-sm my-4 font-light duration-200">
          - or -
        </p>
        <div className="flex">
          <button className="bg-primary-white text-major-text hover:bg-primary-border border border-primary-border rounded-md text-medium flex align-center justify-center flex-1 px-4 py-3 duration-200 mb-6 mr-1.5">
            <FaGithub size={20} className="self-center"></FaGithub>
            <p className="pl-2 self-center">Github</p>
          </button>
          <button className="bg-primary-white text-major-text hover:bg-primary-border border border-primary-border rounded-md text-medium flex align-center justify-center flex-1 px-4 py-3 duration-200 mb-6 ml-1.5">
            <FcGoogle size={20} className="self-center"></FcGoogle>
            <p className="pl-2 self-center">Google</p>
          </button>
        </div>
        <span className="text-minor-text hover:text-major-text text-md self-center font-light duration-200 flex cursor-pointer">
          <p>Doesn't have an account?</p>
          <Link href="/auth/register">
            <span className="underline pl-1">Register!</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
