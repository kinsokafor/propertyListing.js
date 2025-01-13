import ApartmentDetails from "./Apartments/ApartmentDetails.vue"

export const common = [
    {
        path: '/apartment/:id',
        name: 'ApartmentDetails',
        component: ApartmentDetails,
        meta: { title: "Apartment Details" }
    }
]

export default [
    ...common
]