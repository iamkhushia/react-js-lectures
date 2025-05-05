
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteRecipeAsync, getAllRecipesAsync } from "../Servise/action/recipe.action";
import { Container, Spinner, Table } from "react-bootstrap";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userReducer);
    const { recipes, isLoading } = useSelector(state => state.recipeReducer);

    const handleView = (id) => {
        navigate(`/view/${id}`)
    }
    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(deleteRecipeAsync(id))
    }

    useEffect(() => {
        dispatch(getAllRecipesAsync())
    }, [])

    useEffect(()=> {
        if(!user){
            navigate("/signin")
        }
    }, [user])
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
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((recipe, i) => (
                                <tr key={recipe.id}>
                                    <td>{i + 1}</td>
                                    <td>{recipe.title}</td>
                                    <td>{recipe.instructions}</td>
                                    <td>{recipe.ingredients}</td>
                                    <td><img src={recipe.image} height={80} /></td>
                                    <td>{recipe.category}</td>
                                    <td><Button onClick={()=> handleView(recipe.id)}>View</Button></td>
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