import React from 'react'
import Contact from './Contact.js'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { faker } from '@faker-js/faker' 

class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.handleGenerateContact = this.handleGenerateContact.bind(this)
  }

  handleGenerateContact() {
    alert(`Hello ${faker.name.firstName()} ${faker.name.lastName()}`)
  }

  headings() {
    let headings = ["Name", "Email", "Phone Number"]
    return <tr>{headings.map((heading) => <th>{heading}</th>)}</tr>
  }

  contacts() {
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