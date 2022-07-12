import React, {useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dish';
import { Switch, Route, Redirect} from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';


export default function Main() {
    const [dishes, setDishes] = useState(DISHES);
    // const [selectedDish, setSelectedDish] = useState(null);

    // function onDishSelect(dishId){
    //     setSelectedDish(dishId);
    // }

    const HomePage = () => {
        return(
            <Home/>
        )
    }

    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={dishes}/>} />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    );
}