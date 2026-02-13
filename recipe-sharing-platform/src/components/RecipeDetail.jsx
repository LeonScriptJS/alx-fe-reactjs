import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find(
      (r) => r.id === Number(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="p-6">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-6">
        {recipe.title}
      </h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">
          Ingredients
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">
          Instructions
        </h2>
        <p className="leading-7">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
