import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';

const ProfileCard = props => {
    return (
        <div>
            <Card outline color="secondary">
                <CardImg height="150" src={props.image} alt="Profile Avatar" />
                <CardTitle>Name: {props.name}</CardTitle>
                <CardSubtitle>Location: {props.location}</CardSubtitle>
            </Card>
        </div>

    )
}

export default ProfileCard;