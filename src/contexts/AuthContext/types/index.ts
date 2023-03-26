interface InitialState {
  email: string;
  id: string;
  image_url: string;
  name: string;
  phone_number: string;
}

interface SetUserData {
  type: "set_user_data";
  data: {
    email: string;
    id: string;
    image_url: string;
    name: string;
    phone_number: string;
  };
}

type ACTION_TYPE = SetUserData;

export type { ACTION_TYPE, InitialState };
