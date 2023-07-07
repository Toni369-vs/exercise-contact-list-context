import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const [showModal, setShowModal] = useState(false);
	const [idToDelete, setIdToDelete] = useState("");
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
									onDelete={contactIdToDelete => {
										setIdToDelete(contactIdToDelete);
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
			<Modal show={showModal} onClose={() => setShowModal(false)} contactToDelete={idToDelete} />
		</div>
	);
};
