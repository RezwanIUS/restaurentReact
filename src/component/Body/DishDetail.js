import React from 'react'
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import CardText from 'reactstrap/lib/CardText';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "20px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: "left" }} >
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.label}</p>
                        <p>{props.dish.price}</p>
                    </CardText>

                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;