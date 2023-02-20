export interface User {
  last_name: string;
  first_name: string;
  middle_name: string;
  photo: string;
  birth_date: string;
  gender: string;
  email: string;
  id: number;
}

export interface Coach {
  id: number;
  user: User;
}

export interface Client {
  id: number;
  user: User;
}
