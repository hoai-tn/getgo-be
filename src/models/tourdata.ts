
import { faker } from "@faker-js/faker"
export interface ITour {
    title: String,
    typeTour: Number,
    price: Number,
    arrivePlace: String,
    returnPlace: String,
    startDate: String,
    rate?: Number,
    careList?: Array<string>,
    likes?: Array<object>,
    createdAt: Date
}


export const TourTemplate = () => {
    const tour: ITour = {
        title: faker.lorem.sentence(5),
        typeTour: 2,
        price: Number(faker.commerce.price(100, 200)),
        arrivePlace: faker.address.country(),
        returnPlace: faker.address.country(),
        startDate: "20/03/2022",
        rate: 10,
        createdAt: new Date(),
    }

    return tour;

}
