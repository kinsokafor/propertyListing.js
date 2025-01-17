import MyApartments from './Apartments/MyApartments.vue'
import New from './Apartments/New.vue'
import {common as customers} from './customers'

export default [
    {
        path: '/apartment/new',
        name: 'NewApartment',
        component: New,
        meta: { title: "New Apartment" }
    },
    {
        path: '/my-apartments',
        name: 'MyApartments',
        component: MyApartments,
        meta: { title: "My Apartments" }
    },
    ...customers
]