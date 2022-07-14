console.log('vue ok', Vue)

//RICORDA IL PASCAL CASE
const root = new Vue({
    //Posso cambiare il nome all'interno della console (Vue)
    //prendo l'elemento dal dom(OBBLIGATORIO)
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