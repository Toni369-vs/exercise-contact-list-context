const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			// OBTERNER CONTACTO

			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ToniCM")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(error => console.log(error));
			},

			// CREAR CONTACTO

			createContact: (full_name, address, phone, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "ToniCM",
						address: address,
						phone: phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			MODIFICAR CONTACTO

			updateOneContact: (full_name, address, phone, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"full_name": full_name,
						"email": email,
						"agenda_slug": "ToniCM",
						"address": address,
						"phone": phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
