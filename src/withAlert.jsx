import { useContext } from "react";
import { AlertContext } from "./Contexts";

function withAlert(IncommingComponent) {
    function OutgoingComponent(props) {
        const { alert, setAlert, removeAlert } = useContext(AlertContext);
        return <IncommingComponent {...props} alert={alert} setAlert={setAlert} removeAlert={removeAlert}/>;
    }
    return OutgoingComponent;

}

export default withAlert;