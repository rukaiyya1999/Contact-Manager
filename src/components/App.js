import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import { Box } from "@mui/material";

function App() {
  const [contacts, setcontacts] = useState([]);
  const [searchTerm, setsearch] = useState("");
  const [result, setresult] = useState([]);

  //RetriveContact
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  //AddContact
  const contactHandeler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setcontacts([...contacts, response.data]);
  };

  //Update
  const updateHandeler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setcontacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  //RemoveContact
  const removeContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newContact);
  };

  //Search
  const searchHandeler = (searchTerm) => {
    setsearch(searchTerm);
    if (searchTerm !== "") {
      const newconstatList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      setresult(newconstatList);
    } else {
      setresult(contacts);
    }
  };

  useEffect(() => {

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setcontacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header
          contacts={searchTerm.length < 1 ? contacts : result}
          term={searchTerm}
          searchKeyword={searchHandeler}
        />
        <Box sx={{ mt: 1 }}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={searchTerm.length < 1 ? contacts : result}
                  getcontactid={removeContact}
                />
              )}
            />

            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} contactHandeler={contactHandeler} />
              )}
            />

            <Route
              path="/edit"
              render={(props) => (
                <EditContact {...props} updateHandeler={updateHandeler} />
              )}
            />

            <Route path="/contact/:id" component={ContactDetails}></Route>
          </Switch>
        </Box>
      </Router>
    </div>
  );
}

export default App;
