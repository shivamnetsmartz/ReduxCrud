const initialState = [
    {
           id:1,
           name:"Rahul Kumar",
           number: 6699885544,
           email:"rk123@gmail.com"
    },
    {
        id:2,
        name:"Kamal Kumar",
        number: 6695585544,
        email:"kk111@gmail.com"
    }
];

const contactReducer = (state = initialState, action ) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
               const updateState = state.map(contact=> contact.id === action.payload.id? action.payload: contact);
               state = updateState
               return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact=> contact.id !== action.payload && contact);
            state= filterContacts;
            return state;
        default:
            return state; 
    }
};

export default contactReducer;