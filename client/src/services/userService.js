import { buildRequestData } from "../utils/buildUserRequestData";

const mainAddress = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        try {
            const response = await fetch(mainAddress);
            const usersData = await response.json();
            return usersData;
        } catch (err) {
            console.error('Error fetching users', err);
            return {};
        };
    },

    async createUser(userData) {
        try {
            const response = await fetch(mainAddress, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const user = await response.json()

            return user;
        } catch (err) {
            console.error('Creating user failed', err);
            return {};
        }
    }
}