import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  // Declares the state variable of selectedContactId, which holds the ID value of a selected contact
  // and also declares setSelectedContactId, which is the onClick ID value and initializes them as null with useState.
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    // This is ternary operator that checks if the selectedContactId is true then SelectedContact, which is imported from the SelectedContact component, will run with the selectedContactId value.
    // If selectedContactId is false, then the ContactList component is run and will render the whole contact list with the setSelectedContactId is run as prop to later allow ContactList to update with a selectedContactId value.
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
