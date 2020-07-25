
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    }
});


new Vue({
    el: '#app',
    data: {
        user: {
            email: '',
            name: '',
            phone: '',
            address: '',
            payment: '',
            remarks: '',

        },


    },
    methods: {},

});