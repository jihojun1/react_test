import React from "react";
import { Link } from "react-router-dom";

function ContactHeader() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="nav-link">Contact</Link>
        <Link to="/getContactList" className="nav-link">Get Contact List</Link>
        <Link to="/addContact" className="nav-link">Add Contact</Link>
      </nav>
    </div>
  );
}
export default ContactHeader;
