console.log('vue ok', Vue)

/*Milestone 1 (DAY 1)
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - BONUS
●      ////Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
●      Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti*/


dayjs.extend(dayjs_plugin_customParseFormat)

const date = dayjs('2021-06-22 15:10:00').format('DD/MM/YYYY HH:mm:ss')
datex = dayjs('2021-06-22 15:10:00').format('DD/MM/YYYY HH:mm:ss')
const root = new Vue({
    el: '#root',
    data: {
        //ACTIVE INDEX
        active: 0,
        //VARIABLE STARTING AS EMPTY STRING FOR MESSAGES
        message: '',
        //VARIABLE STARTING AS EMPTY STRING FOR FILTERING CONTACTS
        contactFilter: '',
        //MY PERSONAL CONTACT
        datex : dayjs('2021-06-22 15:10:00').format('DD/MM/YYYY HH:mm:ss'),
        user: {
            name: 'Alessio',
            avatar: '_4'
        },
        //CONTACTS FRIENDLIST
        contacts: [
            //1st CONTACT
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                },
                ],
            },
            //2nd CONTACT
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: date,
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            //3rd CONTACT
            {
                name: 'Simone',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: date,
                    text: 'Che bella giornata!',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Penso che resto a casa a giocare al PC',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Daje, pure io. Logga discord',
                    status: 'sent'
                }
                ],
            },
            //4th CONTACT
            {
                name: 'Samuele',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            //5th CONTACT
            {
                name: 'Fabiola',
                avatar: '_io',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Marco',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                },
                ],
            },
            {
                name: 'Martina',
                avatar: '_io',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Andrea',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: date,
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Max',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: date,
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Kenny',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: date,
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
        ]
    }, computed: {
        //FILTERED CONTACTS
        filteredContacts: function () {
            const filtered = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.contactFilter.toLowerCase())
            })
            return filtered
        }
    },
    methods: {
        changeActiveContact(index) {
            this.active = index
        },
        //MESSAGES SENT BY ME
        sendMessage() {
            const newMessage = {
                date: '10/01/2020 15:50:00',
                text: this.message,
                status: 'sent'
            }
            this.contacts[this.active].messages.push(newMessage)
            this.message = ''
            timeOut = setTimeout(this.cpuMessage, 1000)
        },
        //MESSAGE RECEIVED FROM CPU
        cpuMessage() {
            const cpuMessage = {
                date: this.date,
                text: 'Ok boss!',
                status: 'received'
            }
            this.contacts[this.active].messages.push(cpuMessage)
        }, deleteMessage(index) {
            this.contacts[this.active].messages.splice(index, 1);
        }, showDropdown(event) {
            console.log(event)
            const msgEl = event.currentTarget
            const dropdownEl = msgEl.getElementsByClassName('dropdown')[0]
            dropdownEl.classList.toggle('d-none')
        }
    }
})

