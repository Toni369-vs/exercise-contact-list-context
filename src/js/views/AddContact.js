import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [createContact, setCreateContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "ToniCM",
		address: "",
		phone: ""
	});

	const handleChange = e => {
		setCreateContact({ ...createContact, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(createContact.full_name, createContact.address, createContact.phone, createContact.email);

		setCreateContact({
			full_name: "",
			email: "",
			agenda_slug: "ToniCM",
			address: "",
			phone: ""
		});
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control" onSubmit={handleSubmit}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
