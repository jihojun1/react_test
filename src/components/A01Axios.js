import React, { useState } from "react";
import axios from 'axios'

function A01Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState();

  const getContactList = (no = 1, size = 10) => {
    // axios.get(URL, {params: {pageno: 1, ...}, headers: {..}})
    axios.get(baseURL, {params: {pageno: no, pagesize: size}})
      .then( resp => {
        // console.log(resp.data);
        setData( JSON.stringify(resp.data, '', 4) )
      })
      .catch( (error) => console.error(error) );
  }
  const getContact = (no) => {
    axios.get(baseURL + no)
      .then( resp => {
        setData( JSON.stringify(resp.data, '', 4) )
      })
      .catch( (error) => console.error(error) );
  }
  const addContact = () => {
    const data = {
      "name":"강감찬",
      "tel":"010-2222-3339",
      "address":"서울시"
    }

    // axios.post(URL, 전달할값, {options})
    // axios.post(baseURL, data, {params: {no: 1}, headers: {'Content-Type': 'application/json'}})
    axios({
      method: 'post',
      url: baseURL,
      params: {no: 1},
      headers: {'Content-Type': 'application/json'},
      data,
    })
      .then( resp => {
        setData( JSON.stringify(resp.data, '', 4) )
      })
      .catch( (error) => console.error(error) );
  }

  const updateContact = (no) => {
    const data = {
      "no": no,
      "name":"이순신",
      "tel":"010-1111-3339",
      "address":"진해시"
    }

    // axios.put(URL, 수정데이터, {options} )
    axios.put(baseURL + no, data )
      .then( resp => {
        setData( JSON.stringify(resp.data, '', 4) );
      })
      .catch( (error) => console.error(error) );
  }

  const deleteContact = (no) => {
    axios.delete(baseURL + no )
      .then( resp => {
        setData( JSON.stringify(resp.data, '', 4) );
      })
      .catch( (error) => console.error(error) );
  }

  return (
    <div>
      <h3>A01 Axios GET</h3>
      <button   onClick={ () => getContactList(1, 10)}>DATA LIST</button>
      <button   onClick={ () => getContactList(2, 5)}>DATA LIST ASYNC</button>
      <button   onClick={ () => getContact(1)}>GET</button>
      <button   onClick={addContact}>ADD</button>
      <button   onClick={ () => updateContact(1680333278982)}>UPDATE</button>
      <button   onClick={ () => deleteContact(1680333278982)}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15"  defaultValue={data}></textarea>
    </div>
  );
}
export default A01Axios;
