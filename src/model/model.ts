// Create model for the task to keep track of id, task and status of the task.
export interface TodoModel {
    id: number;
    todo: string;
    isCompleted: boolean;
}
