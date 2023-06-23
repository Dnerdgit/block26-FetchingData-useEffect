import { useEffect, useState } from "react";
//import { ContactList } from 'ContactList.jsx';

export default function ({ selectedContactId, setSelectedContactId}) {
    
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function infoList(){
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                console.log(response);
                const result = await response.json();
                console.log(result);
                setContact(result);
            } catch (err) {
                console.log(err);
            }
        }
        infoList();
    });

    
    function contactInfoReview() {
        setSelectedContactId(null);
    }

    return (
        <>
            {
            //contacts.map((contact) => {
              //return <p onClick={()=> { selectedContactId(setSelectedContactId.id) }} key={puppy.id}>{puppy.name}</p>
            //})
            }

            {contact && (
                <div className="Contact-choice">
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <button onClick={contactInfoReview}>Back</button>
                </div>
            )}
        </>
    );
}