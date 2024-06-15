import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);
  console.log("This is SelectedContact's contact.id:", contact);

  useEffect(() => {
    async function fetchContact() {
      const response = await axios.get(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      setContact(response.data);
    }
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  if (!selectedContactId) {
    return (SelectedContact = useState(null));
  }

  return (
    <div>
      <h2>Selected Contact</h2>
      {contact && (
        <>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </>
      )}
    </div>
  );
}
