import MyApartments from './Apartments/MyApartments.vue'
import New from './Apartments/New.vue'
import EditApartment from './Apartments/EditApartment.vue'
import {common as customers} from './customers'

export default [
    {
        path: '/apartment/new',
        name: 'NewApartment',
        component: New,
        meta: { title: "New Apartment" }
    },
    {
        path: '/apartment/edit/:id',
        name: 'EditApartment',
        component: EditApartment,
        meta: { title: "Edit Apartment" }
    },
    {
        path: '/my-apartments',
        name: 'MyApartments',
        component: MyApartments,
        meta: { title: "My Apartments" }
    },
    ...customers
]