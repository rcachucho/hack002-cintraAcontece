import { useHistory } from "react-router";


function BackButton(){
    const history = useHistory();
   
    return (
        <button onClick={() => history.push("homepage")}>Homepage</button> 
    )}

export default BackButton

