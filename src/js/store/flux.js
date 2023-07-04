

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			getAllContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/{agenda_slug}", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error("Error al obtener los contactos");
						}
						return response.json();
					})
					.then(data => {
						setStore({ contacts: data });
						console.log(data);
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
						"full_name": full_name,
						"address": address,
						"agenda_slug": "my_super_agenda",
						"phone": phone,
						"email": email,
					}),
				})
				.then(response => {
					if (!response.ok) {
						throw new Error("Error al crear el contacto");
					}
					return response.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => console.log(error));
			},

			// MODIFICAR CONTACTO

			updateContact: (full_name, address, phone, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"full_name": full_name,
						"address": address,
						"agenda_slug": "ToniCM",
						"phone": phone,
						"email": email,
					}),
				})
				.then(response => {
					if (!response.ok) {
						throw new Error("Error al crear el contacto");
					}
					return response.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
