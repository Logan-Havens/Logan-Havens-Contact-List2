import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);
	return (
		<>contact component
        </>
	);
};
