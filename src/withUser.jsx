import { useContext } from "react";
import { UserContext } from "./Contexts";

function withUser(IncommingComponent) {
    function OutgoingComponent(props) {
        const { user, setUser } = useContext(UserContext);
        return <IncommingComponent {...props} user={user} setUser={setUser} />;
    }
    return OutgoingComponent;

}

export default withUser;
