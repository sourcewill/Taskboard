export enum TaskStatusEnum{
    TODO,
    IN_PROGRESS,
    PAUSED,
    DONE,
}

export interface ISubtask{
    id: number;
    title: string;
    isDone: boolean;
}

export class Task{
    id: number;
    title: string;
    status: TaskStatusEnum;
    subtasksList: ISubtask[];
    description: string;

    constructor(title: string = 'Untitled'){
        this.id = -1;
        this.title = title;
        this.status = TaskStatusEnum.TODO;
        this.subtasksList = [];
        this.description = 'Description.'
    }
}