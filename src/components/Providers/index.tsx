import { NextPageContext } from "next";
import { createContext, useState } from "react";

import { SEO } from "./SEO";
import { Toast } from "./Toaster";

interface Props {
	children?: any;
	pageProps: NextPageContext;
}

const globalNavigationContext = {
	isOpen: false,
	setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = createContext(globalNavigationContext);

export function Providers({ children, pageProps }: Props) {
	const initialState = {
		isOpen: false,
		setIsOpen,
	};

	const [state, setState] = useState(initialState);

	function setIsOpen(isOpen) {
		return setState({ ...state, isOpen });
	}

	return (
		<>
			<SEO />
			<Toast />

			<GlobalNavigationContext.Provider value={state}>
				{children}
			</GlobalNavigationContext.Provider>
		</>
	);
}
