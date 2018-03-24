import { ITodoItem } from "../models/todoItem";
import { ApiClient } from "./apiClient";

export async function getAllTodoItems(): Promise<Array<ITodoItem>> {
    let apiClient = ApiClient.getInstance();

    let result = await apiClient.get('api/todo');
    return result.data as Array<ITodoItem>;
}