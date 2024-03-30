import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
export const addContacts = () => {
   const { store, actions } = useContext(Context);

   return <div>Add Contacts</div>
}
