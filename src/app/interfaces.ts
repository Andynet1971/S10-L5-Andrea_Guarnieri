export interface iTodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  name?: string;
}

export interface iUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
}
