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

    async getUser(userId) {
        try {
            const response = await fetch(`${mainAddress}/${userId}`);
            const user = await response.json();
            return user;
        } catch (err) {
            console.err('Error fetching user', err);
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
        };
    },

    async updateUser(userId, userData) {
        const response = await fetch(`${mainAddress}/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }

        const user = await response.json();
        return user;
    },

    async deleteUser(userId) {
        const response = await fetch(`${mainAddress}/${userId}`, { 
            method: 'DELETE' 
        });

        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    },
}