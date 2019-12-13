import {createNotification} from "../../utils/utils";

const initialState = {
    user: null
};

const editUserDetailsReducer = async (state = initialState, action) => {
  switch (action.type) {
      case 'EDIT_USER':
            var res=await fetch(`https://ohack.herokuapp.com/v1/victoryfoundation/users/${action.payload.id}`,
            {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(action.payload)
            }).catch((error)=>{
                console.log(error);
                createNotification('error', 'Could not edit user, please try again');
                return;
            });
            
            var result=await res.json();
            const {statusCodeValue} = result;
            if (statusCodeValue < 400) {
                createNotification('success', 'status is updated.');
            } else {
                createNotification('error', 'Could not edit user, please try again');
            }
        default:
          return {...state};
    }
};

export default editUserDetailsReducer;
