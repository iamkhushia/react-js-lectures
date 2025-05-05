
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipeAsync } from "../Servise/action/recipe.action";
import { useEffect } from "react";

const ViewRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeReducer);
  useEffect(() => {
    if(id){
        dispatch(getRecipeAsync(id))
    }
}, [id]);
  return (
  <>
    {recipe ? <>
        <h2>{recipe.title}</h2>
    <h3>{recipe.category}</h3>
    <p>{recipe.instructions}</p>
    <p>{recipe.ingredients}</p>
    </>: ""}
  </>
);
};

export default ViewRecipe;