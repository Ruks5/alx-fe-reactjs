import { useState } from "react";

function RegistrationForm() {
  // Step 1: Set up form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    console.log("Form submitted:", formData);
    alert(`User ${formData.username} registered successfully!`);

    // Reset form
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>User Registration (Controlled Form)</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
