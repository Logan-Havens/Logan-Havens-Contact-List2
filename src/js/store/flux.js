const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		contacts: [
			{
				"full_name": "Theresa Barkasy",
				"email": "theresab@email.com",
				"agenda_slug": "theresearch",
				"address":"1234 Main Street, City, STATE 12345",
				"phone":"(123) 456-789"


			}
		],



		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchAllContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/logan")
				.then(Response => Response.json())
				.then(data => {

				console.log(data);
				setStore({contacts:data})
			})
			},
			fetchDeleteContacts: (id) => {
				let options = {
					method:"DELETE",
					body:JSON.stringify(id),
					headers:{
						"Content-Type":"application/json"
					}
				}
				fetch("https://playground.4geeks.com/apis/fake/contact/"+id,options)
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
				fetch("https://playground.4geeks.com/apis/fake/contact/",options)
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
			saveContact:(full_name,address,email,phone) => {

				let newContact = {
					full_name:full_name,
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
			updateContact: (full_name,address,email,phone) => {

				let updatedContact = {
					full_name:full_name,
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
