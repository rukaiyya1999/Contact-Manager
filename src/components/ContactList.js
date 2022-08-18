import React, { useRef } from "react";
// import { Button } from 'react-bootstrap';
import { Box } from "@mui/material";
import ContactCart from "./ContactCart";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getcontactid(id);
  };
  const RenderContact = props.contacts.map((contacts) => {
    return (
      <ContactCart
        contacts={contacts}
        clickHandeler={deleteContact}
        key={contacts.id}
      ></ContactCart>
    );
  });

  return <Box>{RenderContact.length > 0 ? RenderContact : "No Contacts"}</Box>;
};
export default ContactList;
