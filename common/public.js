import ApartmentDetails from "./Apartments/ApartmentDetails.vue"
import PropertyDetails from "./Properties/PropertyDetails.vue"

export const common = [
    {
        path: '/apartment/:id',
        name: 'ApartmentDetails',
        component: ApartmentDetails,
        meta: { title: "Apartment Details" }
    },
    {
        path: '/property/:id',
        name: 'PropertyDetails',
        component: PropertyDetails,
        meta: { title: "Property Details" }
    }
]

export default [
    ...common
]