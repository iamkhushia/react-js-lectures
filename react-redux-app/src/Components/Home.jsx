
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteRecipe, getAllRecipes, getAllRecipesAsync } from "../Servise/action/recipe.action";
import { Button, Container, Table } from "react-bootstrap";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const { recipes } = useSelector(state => state.recipeReducer);
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(deleteRecipe(id))
    }

    // useEffect(() => {
    //     dispatch(getAllRecipes())
    // }, [])

    useEffect(() => {
        dispatch(getAllRecipesAsync())
    }, [])

    return (
        <>
            <Container className="mt-3">
                <h1>Home Page</h1>
                {isLoading ? <Spinner className="spinner-border text-danger"></Spinner> : <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Recipe Title</th>
                            <th>Instructions</th>
                            <th>Ingredients</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((recipe) => (
                                <tr key={recipe.id}>
                                    <td>{recipe.id}</td>
                                    <td>{recipe.title}</td>
                                    <td>{recipe.instructions}</td>
                                    <td>{recipe.ingredients}</td>
                                    <td><img src={recipe.image} height={80} /></td>
                                    <td>{recipe.category}</td>
                                    <td><Button onClick={()=> handleEdit(recipe.id)}>Edit</Button></td>
                                    <td><Button onClick={()=> handleDelete(recipe.id)}>Delete</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>}
            </Container>
        </>
    )
};

export default Home;