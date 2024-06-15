import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SelectedContact({ selectedContactId }) {
  // Passes the selectedContactId prop into SelectedContact
  // Sets contact as the selected contact fetched from the API and setContact is used to store the response data in the fetch request
  const [contact, setContact] = useState(null);
  console.log("This is SelectedContact's contact.id:", contact);

  // Uses a GET request using the selectedContactId value in the URL to get the info for a single contact
  useEffect(() => {
    async function fetchContact() {
      const response = await axios.get(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      setContact(response.data);
    }
    // If there is a selectedContacteId then fetch the contact's information
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  // If there isn't a selectedContactId, then set the state to null
  if (!selectedContactId) {
    return (SelectedContact = useState(null));
  }

  // The contact && part means that it will only render if the contact's state is not null
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
