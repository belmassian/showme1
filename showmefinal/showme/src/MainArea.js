import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import * as firebase from 'firebase';
import MessageBox from './components/MessageBox';
import MessageList from './components/MessageList';


class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          name: "Nick Grismore",
          company: "TBD",
          description: "Never loss a game, just ran out of time"
        },  
        {
          id: 2,
          name: "Funky Monkey",
          company: "Zoo",
          description: "Give me some dope beats and i'll danceeeee"
        },
        {
          id: 3,
          name: "Bri",
          company: "Some Company, Inc",
          description: "Pats fan"
        },
        {
          id: 4,
          name: "Mentor",
          company: "Works at Apple",
          description: "User rating here"
        }
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="3">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
          <MessageList db={firebase} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
        <Row>
          <MessageBox db={firebase} />
        </Row>
      </Container>
    )
  }
}

export default MainArea;
