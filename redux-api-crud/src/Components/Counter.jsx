import { Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "../Servise/action/counter.action";

const Counter = () => {

    const { count } = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(Increment())
    }

    const handleDec = () => {
        dispatch(Decrement())
    }

    const handleReset = () => {
        dispatch(Reset())
    }

    return (
        <>
            <Container>
                <h2 className="counter-data">Counter App :- {count}</h2>

                <Button className="btn" variant="warning" onClick={handleInc}>Increment</Button> &nbsp;
                <Button className="btn" variant="danger" onClick={handleDec}>Decrement</Button> &nbsp;
                <Button className="btn" variant="success" onClick={handleReset}>Reset</Button>
            </Container>
        </>
    )
}
export default Counter;