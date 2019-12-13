import {createNotification} from "../../utils/utils";

const initialState = {
    user: null
};

const flipStatusReducer =  async (state = initialState, action) => {

  switch (action.type) {
      
      case 'FLIP_STATUS':
            var isSuccessful=false;
            var res= await fetch(`https://ohack.herokuapp.com/v1/victoryfoundation/users/${action.payload.id}`,
            {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(action.payload)
            }).catch((error)=>{
                isSuccessful=false;
                console.log(error);
                createNotification('error', 'Could not update status, please try again');
            });

            isSuccessful=true; //comment this
            if(isSuccessful){
              action.payload.status='I';
              
              // var result=await res.json();
              // const {statusCodeValue} = result;
              // if (statusCodeValue < 400) {
              //     isSuccessful=true;
              //     createNotification('success', 'status is updated.');
              // } else {
              //     isSuccessful=false;
              //     createNotification('error', 'Could not update status, please try again');
              // }
              console.log(state);
              if(isSuccessful){
                  var currentUser=state.userManagement.userList.filter((user)=>user.id==action.payload.id);
                  currentUser.status=action.payload.status;
              }
            }
            default:
                return {...state};
    }
};

export default flipStatusReducer;

