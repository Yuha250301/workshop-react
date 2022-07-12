import React, {useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dish';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect} from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';



export default function Main() {
    const [dishes, setDishes] = useState(DISHES);
    const [comments, setComments] = useState(COMMENTS);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [leaders, setLeaders] = useState(LEADERS);
    // const [selectedDish, setSelectedDish] = useState(null);

    // function onDishSelect(dishId){
    //     setSelectedDish(dishId);
    // }

    const HomePage = () => {
        return(
            <Home dish={dishes.filter((dish) => dish.featured)[0]}
                  promotion={promotions.filter((promo) => promo.featured)[0]}
                  leader={leaders.filter((leader) => leader.featured)[0]}
            />
        )
    }

    const DishWithId = ({match}) => {
        return (
            <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
    }

    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={dishes}/>} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={() => <About leaders={leaders}/>} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    );
}