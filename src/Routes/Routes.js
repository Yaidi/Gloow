import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PromotionsList from '../View/PromotionsList';
import PromotionsAdmin from '../View/PromotionsAdmin';
import CategoriesList from '../View/ProductsbyCategory';
import CategoriesAdmin from '../View/CategoriesAdmin';
import ProductsList from '../View/ProductsList';
import ProductsAdmin from '../View/ProductsAdmin';
import ProductsDescription from '../View/ProductsDescription';
import ProductsbyCategory from '../View/ProductsbyCategory';
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
                <Route path='/ProductsbyCategory/:id' component={CategoriesList} />
                <Route exact path='/CategoriesAdmin' component={CategoriesAdmin} />
                <Route path='/ProductsList' component={ProductsList} />
                <Route exact path='/ProductsAdmin' component={ProductsAdmin} />
                <Route path='/ProductsDescription/:id' component={ProductsDescription} />
                <Route exact path='/Analytics' component={Analytics} />
            </Switch>

        </Router >
    );
};

export default Routes;
