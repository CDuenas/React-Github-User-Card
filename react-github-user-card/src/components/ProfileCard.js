import React from "react";
import {Card, CardImg, CardTitle, CardSubtitle} from 'reactstrap';

const ProfileCard = (props) => {
    return (
        <div>
            <Card outline color="secondary">
                <CardImg width="10" src={props.image} alt="Profile Avatar" />
                <CardTitle>Name: {props.name}</CardTitle>
                <CardSubtitle>Location: {props.location}</CardSubtitle>
            </Card>
        </div>

    )
}

export default ProfileCard;