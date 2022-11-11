import { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "./Contexts";

const withProvider = (provider) => (IncommingComponent) => (props) => {
        const contextData = useContext(provider);
        return <IncommingComponent {...props} {...contextData} />;
   
};
export default withProvider;

export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);
