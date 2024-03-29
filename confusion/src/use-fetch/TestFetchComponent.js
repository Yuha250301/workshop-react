import React from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";
import { baseURL } from "../shared/baseURL";

export function RenderComments({comments}){
    const comment = comments.map((item) => {
        return(
            <div key={item.id}>
                <h6>{"id:" + item.id + "- rating:" + item.rating}</h6>
                <p>{item.comment}</p>
                <p>{item.author} {item.date}</p>
            </div>
        );
    });

    return(
        <div className="col-12 col-sm-7">
            <h2>comments</h2>
            {comment}
        </div>
    );
}

class TestFetchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [],
            comments: [],
            id: -1,
            dishId: -1,
            rating: 1,
            comment: "",
            author: "",
            date: new Date(),
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.fetchDishes();
        this.fetchComments();
    }

    handleInputChange(event) {
        const nameControl = event.target.name;
        const value = event.target.value;
        this.setState({[nameControl]: value});
        console.log(nameControl + ',' + value);
    }

    addComment(newComment) {
        return fetch(baseURL + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response => {
            if (response.ok) {
                console.log(newComment);
                this.setState({comments: this.state.comments.concat(newComment)});
            }
        });
    }

    handleSubmit(dish){
        const newComment = {
            id: this.state.comments.length,
            dishId: dish.id,
            rating: this.state.rating,
            comment: this.state.comment,
            author: this.state.author,
            date:this.state.date.toString(),
        }

        console.log(newComment);
        this.addComment(newComment);
    }

    fetchDishes() {
        return fetch(baseURL + "dishes")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ dishes: data });
            });
    }

    fetchComments() {
        return fetch(baseURL + "comments")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ comments: data });
            });
    }
    render() {
        const content = this.state.dishes.map( (dish) => {
            return (
                <div className="col-12 col-sm-8" key={dish.id}>
                    <Card>
                        <CardImg top src={baseURL + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <h4>comments</h4>
                    <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dish.id, 10))} />

                    <h4>your comment</h4>
                    <Form>
                        <FormGroup>
                            <Label for='author'>author: </Label>
                            <Input type='text' name='author' id='author' placeholder='author' value={this.state.author} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='comment'>comment: </Label>
                            <Input type='text' name='comment' id='comment' placeholder='comment' value={this.state.comment} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='rating'>rating: </Label>
                            <Input type='number' name='rating' id='rating' placeholder='rating' min='1' max='5' value={this.state.rating} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.handleSubmit.bind(this,dish)}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            );
        });

        return (
            <div className="col-12 col-sm-5">
                {content}
            </div>
        );
    }
}

export default TestFetchComponent;
