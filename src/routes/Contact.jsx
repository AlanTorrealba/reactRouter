import React from "react";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { getContact } from "../data/items";
function Contact() {
  const params = useParams();

  const contact = useMemo(
    () => getContact(params.contactid),
     [params.contactid]
     );
     
if (!contact) {
  throw new Error('Contact does not exist')
}


  return (
    <div className="contactContainer">
      <h1>{contact.name}</h1>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
}

export default Contact;
