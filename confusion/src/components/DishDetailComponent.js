import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle,  } from "reactstrap";

function RenderDish({dish}) {
    return (
        <div className="col-12">
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

function RenderComment({comments}){
    const comment = comments.map((item, index) => {
        return(
            <div key={index}>
                <p>{item.comment}</p>
                <p>{item.author} {item.date}</p>
            </div>
        );
    });
    return  (
        <div className="col-12 ">
            <h2>Comments</h2>
            {comment}
        </div>
    );
}

export default function DishDetail({dish, comments}) {
    if (dish === null) return <div></div>

    return (
        <div className="container">
          <div className="row">
            <Breadcrumb className="col-12">
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComment comments={comments} />
            </div>
          </div>
        </div>
    );
}