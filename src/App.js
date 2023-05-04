import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

        </Fragment>
    );
}

export default App;
