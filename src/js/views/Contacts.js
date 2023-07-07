import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { UpdateContact } from "../views/UpdateContact.js";
import { Context } from "../store/appContext.js";

export const Contacts = () => {

	const [state, setState] = useState({
		showModal: false,
		showUpdateContact: false,
	});

	const [idToContact, setIdToContact] = useState("");
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	}, [store.contacts]);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map(contact => {
							// console.log(contact.id); // Imprimir el id en la consola
							return (
								<ContactCard
									onDelete={contactId => {
										setIdToContact(contactId);
										setShowModal(true);
									}}
									onUpdateContact={contactId => {
										setIdToContact(contactId );
										setShowModal(true);
									}}
									key={contact.id}
									id={contact.id}
									full_name={contact.full_name}
									email={contact.email}
									address={contact.address}
									phone={contact.phone}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState(false)} contactToId={idToContact} />
			<UpdateContact show={state.showUpdateContact} onClose={() => setState(false)} contactToId={idToContact} />
		</div>
	);
};
