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
    }
}