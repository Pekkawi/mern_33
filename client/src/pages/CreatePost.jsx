import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const handleSubmit = () => {};

const handleChange = (event) => {};

const handleSurpriseMe = () => {};

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [GeneratingImg, setGeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[2rem]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[1.2rem] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelname="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelname="Prompt"
            type="text"
            name="prompt"
            placeholder="Dracula walking down the street of New York City in the 1920s, black and white photography"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
