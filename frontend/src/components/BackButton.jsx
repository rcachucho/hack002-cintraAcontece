import { useHistory } from "react-router";


function BackButton() {
    const history = useHistory();

    return (
        <button onClick={() => history.push("/")}>
            Voltar ao ínicio
        </button>
    )
};


export default BackButton;