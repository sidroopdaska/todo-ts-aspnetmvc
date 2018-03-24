import { ITodoItem } from "../models/todoItem";
import { ApiClient } from "./apiClient";

export async function getAllTodoItems(): Promise<Array<ITodoItem>> {
    let apiClient = ApiClient.getInstance();

    let result = await apiClient.get('api/todo');
    return result.data as Array<ITodoItem>;
}

export async function postNewTodoItem(name: string): Promise<ITodoItem> {
    let apiClient = ApiClient.getInstance();
    let item: ITodoItem = {
        name,
        isCompleted: false
    };

    let result = await apiClient.post('api/todo', JSON.stringify(item));
    return result.data as ITodoItem;
}