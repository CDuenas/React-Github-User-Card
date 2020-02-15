import React from "react";
import ProfileCard from "./ProfileCard";
import Followers from "./Followers";
import { Container, Row } from "reactstrap";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: ""
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/CDuenas")
      .then(res => res.json())
      // .then(profiles => console.log(profiles))
      .then(profiles => this.setState({ profiles }))
      .catch(err => console.log("Error:", err));
  }




  render() {
    return (
      <Container>
        <Row>
          {/* {console.log(this.state.profiles)} */}
              <ProfileCard 
                key={this.state.profiles.id}
                name={this.state.profiles.name}
                location={this.state.profiles.location}
                image={this.state.profiles.avatar_url}
              />
              <h2>Followers:</h2>
              <Followers />
        </Row>
      </Container>
    )
  }
}

export default Profile;