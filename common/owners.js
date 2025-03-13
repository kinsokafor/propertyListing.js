import MyApartments from './Apartments/MyApartments.vue'
import New from './Apartments/New.vue'
import EditApartment from './Apartments/EditApartment.vue'
import MyProperties from './Properties/MyProperties.vue'
import NewProperty from './Properties/New.vue'
// import EditProperty from './Properties/EditProperty.vue'
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
    {
        path: '/property/new',
        name: 'NewProperty',
        component: NewProperty,
        meta: { title: "New Property" }
    },
    {
        path: '/my-properties',
        name: 'MyProperties',
        component: MyProperties,
        meta: { title: "My Properties" }
    },
    ...customers
]