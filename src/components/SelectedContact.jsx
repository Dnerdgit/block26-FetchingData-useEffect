import { useEffect, useState } from "react";
import { ContactList } from 'ContactList.jsx';

export default function ({ selectedContactId, setSelectedContactId}) {
    
    const [contacts, setContacts] = useState(contacts);
    useEffect(() => {
        async function infoList(){
            try {
                const response await fetch(
                    `https://fsa=jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
            }
        }
    })

    return (

        {
            contacts.map((contact) => {
              return <p onClick={()=> { selectedContactId(setSelectedContactId.id) }} key={puppy.id}>{puppy.name}</p>
            })
          }

        {contacts && (
            <div className="">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.address.city}</p>
            </div
        )}
    )
}