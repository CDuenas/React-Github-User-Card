import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProfileCard = props => {
    return (
        <Card body outline color="secondary">
            <CardImg height="100" src={props.image} alt="Profile Avatar" />
            <CardBody >
                <CardTitle>Name: {props.name}</CardTitle>
                <CardSubtitle>Location: {props.location}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default ProfileCard;