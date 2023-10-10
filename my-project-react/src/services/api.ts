import { faker } from '@faker-js/faker';

const delay = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

//USER
export const createUser = (id: number) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
});
export const getUsers = async () => {
    const array = Array.from(Array(50).keys())
    await delay(100);
    return array.map(createUser)
}

//MESSAGES
export const createMessage = (id: number) => ({
    id,
    text: faker.hacker.phrase(),
});
export const getMessages = async () => {
    const array = Array.from(Array(50).keys())
    await delay(100);
    return array.map(createMessage)
}