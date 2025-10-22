export function buildRequestData(inputData) {
    const address = {
        country: inputData.country,
        city: inputData.city,
        street: inputData.street,
        streetNumber: inputData.streetNumber
    };

    const timestamp = new Date().toISOString();

    const formattedData = {
        firstName: inputData.firstName,
        lastName: inputData.lastName,
        email: inputData.email,
        phoneNumber: inputData.phoneNumber,
        createdAt: timestamp,
        updatedAt: timestamp,
        imageUrl: inputData.imageUrl,
        address: address,
        }

    return formattedData;
    };
