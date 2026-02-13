import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientsArray = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      if (ingredientsArray.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: steps,
    };

    console.log("New Recipe:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <div>
          <label className="block mb-2 font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border rounded-lg p-3"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className="w-full border rounded-lg p-3"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">
              {errors.steps}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
