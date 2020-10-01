import React, {Component} from 'react';

class UpdateAnimal extends Component {
    getIntialState(){
        return{
            animal: {}
        }
    }    
    state = {
        animal:{
            name: { type: String, required: true },
            type: { type: String, required: true },
            dateOfBirth: {type: String, required: true},
            notes: { type: String, required: true },
        }
    }
}

export default UpdateAnimal;