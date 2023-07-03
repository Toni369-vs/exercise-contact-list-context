const getState = ({ getStore, setStore }) => {
	return {
		store: {},

		actions: {
			getAllContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda", {
					method: "GET"
				})
				.then(response => {
					if (!response.ok) {
						throw new Error("Error al obtener las agendas");
					}
					return response.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => console.log(error));
			},

			createContact: contactData => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactData)
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
