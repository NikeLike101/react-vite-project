import RouterComponent from "./router/RouterComponent.tsx";
import AppContext from "./redux/contexts/AppContext.tsx";


const App = () => {

    return (
        <AppContext>
            <RouterComponent/>
        </AppContext>
    );
};

export default App;
