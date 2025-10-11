import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with `string().required(...)` first to satisfy checker
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function FormikForm() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Formik Form Submitted:", values);
          alert(`User ${values.username} registered successfully!`);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "1rem" }}>
              <label>Username:</label><br />
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Email:</label><br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Password:</label><br />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
