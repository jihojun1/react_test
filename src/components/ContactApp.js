import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import ContactHeader from "./Contact/ContactHeader";
import ContactHome from "./Contact/ContactHome";
import AddContact from "./Contact/AddContact";
import UpdateContact from "./Contact/UpdateContact";
import GetContact from "./Contact/GetContact";
import GetContactList from "./Contact/GetContactList";

function ContactApp() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contactList, setContactList] = useState({pageno: '', pagesize: '', totalcount: '', contacts: []});
  const [contact, setContact] = useState({no: '', name: '', tel: '', address: '', photo: ''});
  
  const navigate = useNavigate();

  const getContactList = useCallback((no = 1, size = 10) => {
    axios.get(baseURL, {params: {pageno: no, pagesize: size}})
      .then( resp => setContactList(resp.data))
      .catch( (error) => console.error(error));
  }, []);

  const getContact = useCallback((no) => {
    axios.get(baseURL + no)
      .then( resp => {
        setContact(resp.data);
        navigate('/getContact')
      })
      .catch( (error) => console.error(error));
  }, [navigate]);

  const deleteContact = useCallback((no) => {
    axios.delete(baseURL + no)
      .then( () => {
        getContactList(1, 10);
        navigate('/getContactList');
      })
      .catch( (error) => console.error(error));
  }, [navigate, getContactList]);

  const updateContact = useCallback((data) => {
    axios.put(baseURL + data.no, data)
      .then( () => {
        getContactList(1, 10);
        navigate('/getContactList');
      })
      .catch( (error) => console.error(error));
  }, [navigate, getContactList]);

  const addContact = useCallback((data) => {
    axios.post(baseURL, data)
      .then( () => {
        getContactList(1, 10);
        navigate('/getContactList');
      })
      .catch( (error) => console.error(error));
  }, [navigate, getContactList]);

  const changeContact = useCallback((evt) => {
    const newData = {...contact, [evt.target.name]: evt.target.value}
    setContact(newData);
  }, [contact]);

  const cleanContact = useCallback(() => {
    setContact({no: '', name: '', tel: '', address: '', photo: ''})
  }, []);

  const goURL = useCallback((url) => {
    navigate(url);
  }, [navigate])

  useEffect(() => {
    getContactList(1, 10);
  }, [getContactList]);

  return (
    <div>
      <ContactHeader />
      <br />

      <Routes>
        <Route path="/"                 element={<ContactHome />} />
        <Route path="/getContactList"   
          element={<GetContactList contactList={contactList} getContact={getContact} />} />
        <Route path="/getContact"       
          element={<GetContact contact={contact} goURL={goURL} deleteContact={deleteContact} />} />
        <Route path="/addContact"       
          element={<AddContact contact={contact} changeContact={changeContact}
            cleanContact={cleanContact} addContact={addContact} />} />
        <Route path="/updateContact"    
          element={<UpdateContact contact={contact} changeContact={changeContact}
            updateContact={updateContact} />} />
        <Route path="*"                 element={<h3>Not Found</h3>} />
      </Routes>
    </div>
  );
}
export default ContactApp;
