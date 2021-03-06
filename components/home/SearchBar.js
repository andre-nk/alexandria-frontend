import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";
import { Formik, Field, Form } from "formik";

export default function SearchBar() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        query: "",
      }}
      onSubmit={(values) => {
        if (values.query.indexOf("/c") >= 0) {
          router.push(
            `notes/new/${values.query.slice(3, values.query.length)}`,
            undefined,
            { shallow: true }
          );
        }
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="flex flex-col">
            <div className="w-full h-14 bg-primary-white border border-minor-text rounded-xl flex align-middle px-4 mb-6">
              <IoSearch className="self-center mr-4" size={18} />
              <Field
                autoFocus
                type="text"
                name="query"
                placeholder='Type "/c" to create a new note'
                className="bg-transparent w-full focus:outline-none"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
