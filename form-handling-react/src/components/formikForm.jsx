import React from "react";
import { useFormik } from "formik";

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(`Form Submitted!\nName: ${values.name}\nEmail: ${values.email}`);
    },
  });

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Formik Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 16px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormikForm;

