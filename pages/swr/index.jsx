import axios from "axios";
import { useState } from "react";
import useSWR from "swr";

function DashboardSWR() {
  const [formData, setFormData] = useState({ name: "" });

  const fetchuser = async () => {
    const response = await fetch("http://localhost:9090/api/getAllTags");
    const data = await response.json();

    return data;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9090/api/createTag",
        formData
      );
      setFormData({ name: "" });
      if (response) {
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error } = useSWR("dashboard", fetchuser);

  if (error) return "An error has ocured";
  if (!data) return "Loading........";

  console.log(data.tags);
  return (
    <div>
      <input
        type="text"
        className="input-login"
        id="floatingInput"
        placeholder="Wedding"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>save</button>
      <div>
        {data.tags.map((tag) => {
          return <div key={tag._id}>{tag.name}</div>;
        })}
      </div>
    </div>
  );
}

export default DashboardSWR;
