import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle,  } from "reactstrap";

function renderDish(dish) {
    return (
        <div className="col-12 col-sm-5">
        <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
    );
} 

function renderComments(comments){
    const comment = comments.map((item, index) => {
        return(
            <div key={index}>
                <p>{item.comment}</p>
                <p>{item.author} {item.date}</p>
            </div>
        );
    });
    return  (
        <div className="col-12 col-sm-7">
            <h2>Comments</h2>
            {comment}
        </div>
    );
}

export default function DishDetail(props) {
    
    return ( 
        <div>
            {(props.dish) && 
                <div className="container">
                    <div className="row">
                        {renderDish(props.dish)}
                        {renderComments(props.dish.comments)}
                    </div>
                </div> }
        </div>
    );
}