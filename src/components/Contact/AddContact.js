import React, { useEffect } from "react";

function AddContact(props) {
  const { contact, changeContact, cleanContact, addContact } = props;

  useEffect(() => {
    cleanContact();
  }, [cleanContact]);

  return (
    <div>
      <h3>Add Contact</h3>
      Name: <input type="text" className="form-control" name="name"
        value={contact.name} onChange={changeContact} />
      Tel: <input type="text" className="form-control" name="tel"
        value={contact.tel} onChange={changeContact} />
      Address: <input type="text" className="form-control" name="address"
        value={contact.address} onChange={changeContact} />
      <br />
      <button className="btn btn-outline-primary" onClick={() => addContact(contact)}>ADD</button>
    </div>
  );
}

export default AddContact;
