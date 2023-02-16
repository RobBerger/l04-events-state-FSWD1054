import React from 'react'
import Contact from './Contact.js'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { faker } from '@faker-js/faker' 

class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.ContactList = []
    this.handleGenerateContact = this.handleGenerateContact.bind(this)
  }

  generateContact() {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    return {
      first_name: firstName,
      last_name: lastName,
      email: faker.internet.exampleEmail(firstName, lastName),
      phone: faker.phone.number()
    }
  }

  handleGenerateContact() {
    this.contactList.push(this.generateContact())
  }

  headings() {
    let headings = ["Name", "Email", "Phone Number"]
    return <tr>{headings.map((heading) => <th>{heading}</th>)}</tr>
  }

  contacts() {
    return this.contactList.map((contact) => <Contact contact={contact} />)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleGenerateContact}>
          Generate Contact
        </Button>

        <Table striped bordered hover>
          <thead>{this.headings()}</thead>
          <tbody>{this.contacts()}</tbody>
        </Table>
      </div>
    )
  }
}

export default ContactList