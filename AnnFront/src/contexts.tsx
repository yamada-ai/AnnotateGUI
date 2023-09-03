import { createContext, useState } from 'react';


type UserContextValue = {
	user_id: number
	room_name: string
};

export const UserContext = createContext<UserContextValue>({} as UserContextValue);

export const UserContextProvider = ({ children }) => {
	const [user_id, setAuthToken] = useState(-1);
	const [room_name, setRoomName] = useState("");

	const login = (token: number) => {
		setAuthToken(token);
	};

	const logout = () => {
		setAuthToken(-1);
	};
	const selectRoom = (fname: number) => {
		setRoomName(fname);
	};
	return (
		<UserContext.Provider value={{ user_id, login, logout, room_name, selectRoom }}>
			{children}
		</UserContext.Provider>
	);

}