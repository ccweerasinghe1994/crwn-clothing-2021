import "./App.scss";
import HomePage from "./pages/homepage/home-page.component";
import ShopPage from "./pages/shop/shop-page.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
