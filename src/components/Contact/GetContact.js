import React from "react";

function AddContact(props) {
  const { contact, goURL, deleteContact } = props;

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled      defaultValue={contact.name} />
        Tel: <input type="text" className="form-control" disabled       defaultValue={contact.tel}/>
        Address: <input type="text" className="form-control" disabled   defaultValue={contact.address}/>
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => goURL('/updateContact')}>수정</button>
      <button className="btn btn-outline-primary" onClick={() => deleteContact(contact.no)}>삭제</button>
    </div>
  );
}
export default AddContact;
