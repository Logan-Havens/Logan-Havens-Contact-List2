import React, { useState } from "react"
import { Context } from "../store/appContext";

export const listContacts = () => {
    const { store, actions } = useContext(Context);

    return <div>List Contacts</div>
}
