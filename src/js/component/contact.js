import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contact = () => {
    const { store, actions } = useContext(Context);
	return (
		<>
			<div>
				contact component
			</div>
        </>
	);
};
