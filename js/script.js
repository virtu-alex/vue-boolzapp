console.log('vue ok', Vue)

const root = new Vue({  
    el: '#root',
    data: {
        user: {
            name: 'Alessio',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            },
        ]
    }, computed: {

    },
    methods: {

    }
})