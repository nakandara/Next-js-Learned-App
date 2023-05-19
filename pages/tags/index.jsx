import { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({ name: ""});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("http://localhost:9090/api/createTag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
    
      <button type="submit">Submit</button>
    </form>
  );
}
