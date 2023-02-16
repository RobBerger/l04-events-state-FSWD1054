import React from 'react'
import faker from '@faker-js/faker'
import Button from 'react-bootstrap/Button'

class ContactActions extends React.Component {
  constructor(props) {
    super(props)
    this.handleGenerateContact = this.handleGenerateContact.bind(this)
  }

  generateContact() {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    return {
      first_name: firstName,
      last_name: lastName,
      email: faker.internet.exampleEmail(firstName, lastName),
      phone: faker.phone.phoneNumber()
    }
  }

  handleGenerateContact() {
  }

  render() {
    return <Button onClick={this.handleGenerateContact}>
      Generate Contact
    </Button>
  }
}

export default ContactActions