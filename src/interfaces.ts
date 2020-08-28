export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface IPlan {
  title: string;
  id: number;
  todos: ITodo[];
}
