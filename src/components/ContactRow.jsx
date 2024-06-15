import React from "react";
import ContactList from "./ContactList";

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        console.log("This is the selected contact:", contact.id);
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
