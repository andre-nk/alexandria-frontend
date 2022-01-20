import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Fragment } from "react/cjs/react.production.min";
import Image from "next/image";

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid e-mail address")
    .required("E-mail field is for the subscription"),
});

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div class="py-24 px-20">
        <div class="flex justify-between items-center">
          <div className="md:w-2/3 flex">
            <div class="md:w-1/3 w-full">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mb-4">
                FEATURES
              </h2>
              <nav class="list-none flex flex-col space-y-2.5">
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Create a note
                  </a>
                </li>
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Your notes
                  </a>
                </li>
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Get our apps
                  </a>
                </li>
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Get help
                  </a>
                </li>
              </nav>
            </div>
            <div class="md:w-1/3 w-full">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mb-4">
                CONNECT
              </h2>
              <nav class="list-none flex flex-col space-y-2.5">
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Feedback
                  </a>
                </li>
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Developer contact
                  </a>
                </li>
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Repository
                  </a>
                </li>
                <li>
                  <a class="text-major-text cursor-pointer hover:underline hover:text-primary-blue duration-200">
                    Licenses
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div class="md:w-1/3">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mb-4">
              SUBSCRIBE 📨
            </h2>
            <div class="flex w-full justify-center mb-2 items-end md:justify-start">
              <div class="relative w-full">
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={SubscribeSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => {
                    return (
                      <Fragment>
                        <Form className="flex w-full space-x-4">
                          <div className="w-full">
                            <Field
                              type="text"
                              name="email"
                              id="email"
                              className="border border-primary-border w-full focus:border-primary-blue outline-none rounded-md flex-1 px-4 py-3.5 duration-200"
                              placeholder="E-mail address..."
                            />
                          </div>
                          <button
                            className="bg-primary-blue px-6 min-h-full text-primary-bg hover:bg-active-blue rounded-md text-medium border duration-200"
                            type="submit"
                          >
                            Subscribe!
                          </button>
                        </Form>
                        {errors.email && touched.email ? (
                          <p className="mt-1.5 ml-1.5 text-xs text-red-500 opacity-70">
                            *{errors.email}
                          </p>
                        ) : null}
                      </Fragment>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <span class="text-gray-500 text-sm md:text-left text-center">
              The monthly newsletter will notify you about{" "}
              <strong className="font-medium">alexandria</strong> updates and
              development stories!
            </span>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex space-x-2.5 justify-center items-center">
            <Image src="/logo.png" width={32} height={32} />
            <span className="font-light text-md pb-0.5">
              <strong className="font-medium">alexandria.</strong>
            </span>
          </div>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            ©2022 Alexandria —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              @andrenk
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
