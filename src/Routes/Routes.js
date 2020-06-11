import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PromotionsList from '../View/PromotionsList';
import PromotionsAdmin from '../View/PromotionsAdmin';
import CategoriesList from '../View/CategoriesList';
import CategoriesAdmin from '../View/CategoriesAdmin';
import ProductsList from '../View/ProductsList';
import ProductsAdmin from '../View/ProductsAdmin';
import ProductsDetails from '../View/ProductsDetails';
import Home from '../View/Home';
import Analytics from '../View/Analytics';


const Routes = () => {
    return (
        <Router>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/PromotionsList' component={PromotionsList} />
                <Route exact path='/PromotionsAdmin' component={PromotionsAdmin} />
                <Route path='/CategoriesList/:id' component={CategoriesList} />
                <Route exact path='/CategoriesAdmin' component={CategoriesAdmin} />
                <Route path='/ProductsList/:id' component={ProductsList} />
                <Route exact path='/ProductsAdmin' component={ProductsAdmin} />
                <Route exact path='/ProductsDetails' component={ProductsDetails} />
                <Route exact path='/Analytics' component={Analytics} />
            </Switch>

        </Router >
    );
};

export default Routes;
