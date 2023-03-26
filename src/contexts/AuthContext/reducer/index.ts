import { ACTION_TYPE, InitialState } from "../types";

const initialState: InitialState = {
  email: "",
  id: "",
  image_url: "",
  name: "",
  phone_number: "",
};

function reducer(state: InitialState, action: ACTION_TYPE): InitialState {
  switch (action.type) {
    case "set_user_data": {
      return {
        ...state,
        email: action.data.email,
        id: action.data.id,
        image_url: action.data.image_url,
        name: action.data.name,
        phone_number: action.data.phone_number,
      };
    }
  }
}

export { initialState, reducer };
