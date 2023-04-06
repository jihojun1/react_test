import React from "react";
import { Link } from 'react-router-dom'

function GetContactList (props) {
  const { contactList, getContact } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts.map( contact => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td><Link to="#"          onClick={() => getContact(contact.no)}>{contact.name}</Link></td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
              <td><img src={contact.photo} width="50" alt="사진" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetContactList;
