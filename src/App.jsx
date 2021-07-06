import "./App.scss";
import HomePage from "./pages/homepage/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route path="/signin" component={SignInAndSignUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
