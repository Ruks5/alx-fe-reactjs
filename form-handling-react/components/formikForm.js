import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitting data to mock API:", values);

          fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("User registered:", data);
              alert("User registered successfully!");
              resetForm();
            })
            .catch((err) => {
              console.error("Error:", err);
            });
        }}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}