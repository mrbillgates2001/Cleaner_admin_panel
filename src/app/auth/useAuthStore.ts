import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";

const AuthStore = (set: (produce: () => void) => void) => ({
	email: "",
	fullName: "",
	phoneNumber: "",
	password: "",
	login: async (user: { email: string; password: string }) => {
		try {
			const res = await axios.post(
				"https://app.olimjanov.uz/v1/auth/login",
				user
			);
			const data = await res.data;

			console.log(data);
			set(
				produce((state) => {
					state.email = data.email;
					state.password = data.password;
				})
			);
		} catch (error) {
			console.log(error.message);
		}
	},

	register: async (user: {
		email: string;
		fullname: string;
		phoneNumber: string;
		password: string;
	}) => {
		try {
			const res = await axios.post(
				"https://app.olimjanov.uz/v1/auth/register",
				user
			);
			const data = await res.data;
			console.log(data);
			localStorage.setItem("access_token", data);
		} catch (error) {}
	},
});

export const useAuthStore = create(AuthStore);
