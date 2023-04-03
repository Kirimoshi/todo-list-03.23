interface ITodoItem {
    id: string,
    task: string,
    completed: boolean,
}
interface ITodoList {
    todos: ITodoItem[],
}
interface IBtnItem {
    name: string,
    label: string,
}
interface IUser {
    name: string,
}
interface IUserList {
    names: IUser[],
}

export type { ITodoItem, ITodoList, IBtnItem, IUser, IUserList };