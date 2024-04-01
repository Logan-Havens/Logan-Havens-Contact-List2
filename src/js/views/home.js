import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Contact } from "../component/contact";

export const Home = () => {
	const { store, actions } = useContext(Context);
	<div className="text-center mt-5">
		<Contact />
	</div>
};
