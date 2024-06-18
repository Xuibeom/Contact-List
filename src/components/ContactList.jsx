import { useState, useEffect } from "react";
// import axios from "axios";
import ContactRow from "./ContactRow";

// The setSelectedContactId prop is passed into the ContactList component
export default function ContactList({ setSelectedContactId }) {
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

  // Fetches the list from the API. Commented out fetch request uses Axios for testing purposes.
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        console.log("This is the fetched list", result);
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  //   // Separate function to test using axios
  //   // Simplifies and streamlines the usual function by removing a couple extra steps and the need for try/await function
  //   useEffect(() => {
  //     async function fetchContactsFromAxios() {
  //       const response = await axios.get(
  //         "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
  //       );
  //       setContacts(response.data.results);
  //     }
  //   }, []);

  // This return statement sets up the basic table and populates new rows with ContactRow (imported from ContactRow.jsx)
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          // For each contact in the contacts array, a ContactRow component is rendered
          // Passes the setSelectedContactId prop into ContactRow that allows a selected contact's id to be set in ContactRow
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}
