export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    // Sets the setSelectedContactId to the contact's ID when a row is clicked
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
