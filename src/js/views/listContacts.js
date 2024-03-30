import React, { useContext } from "react";
import { Context } from "../store/appContext";

const listContacts = () => {
    const { store, actions } = useContext(Context);

    return <div>List Contacts</div>;
};

export default listContacts;