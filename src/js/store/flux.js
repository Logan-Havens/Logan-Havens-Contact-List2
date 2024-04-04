const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},



		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
		
			fetchAllContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/logan/contacts")
				.then(Response => Response.json())
				.then(data => {

				console.log(data);
				setStore({contacts:data.contacts})
			})
			},
			fetchDeleteContacts: (id) => {
				let options = {
					method:"DELETE",
					
					headers:{
						"Content-Type":"application/json"
					}
				}
				fetch("https://playground.4geeks.com/contact/agendas/logan/contacts/"+id,options)
				.then(res => {
					if (!res.ok)throw Error(res.statusText)
					return res
				})
				.then(res => console.log("Successfully Deleted",res))
			},
			deleteContact:(id) => {
				const store= getStore();
				let revisedContactList =store.contacts.filter(contact => contact.id !==id);
				getActions().fetchDeleteContacts(id);
				setStore({contacts:revisedContactList})
			},
			fetchCreateContact: newContact => {
				let options = {
					method:"POST",
					body:JSON.stringify(newContact),
					headers:{
						"Content-Type":"application/json"
					}
				}
				fetch("https://playground.4geeks.com/contact/agendas/logan/contacts",options)
				.then(res => {
					if (!res.ok)throw Error(res.statusText)
					return res
				})
				.then(res => console.log("Successfully Created",res))
			},
			createContact:(aNewContact) => {
				const store= getStore(); 
				let revisedStore = [...store.contacts,aNewContact];
				getActions().fetchCreateContact(aNewContact);
				setStore({contacts:revisedStore})
			},
			saveContact:(fullName,address,email,phone) => {

				let newContact = {
					fullName:fullName,
					address:address,
					email:email,
					phone:phone,
					agenda_slug:"logan"
				}
				getActions().addContact(newContact)
			},
			fetchEditContact:updatedContact => {
				let options = {
					method:"PUT",
					body:JSON.stringify(updatedContact),
					headers:{
						"Content-Type":"application/json"
					}
				}
				fetch("https://playground.4geeks.com/apis/fake/contact/",options)
				.then(res => {
					if (!res.ok)throw Error(res.statusText)
					return res
				})
				.then(res => console.log("Successfully Edited",res))
			},
			updateContact: (fullName,address,email,phone) => {

				let updatedContact = {
					fullName:fullName,
					address:address,
					email:email,
					phone:phone,
					agenda_slug:"logan"
				}
				getActions().addContact(updatedContact)
		}
	}}
};

export default getState;
