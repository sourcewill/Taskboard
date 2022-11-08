export enum TaskStatusEnum {
    TODO = 'To Do',
    IN_PROGRESS = 'In Progress',
    PAUSED = 'Paused',
    DONE = 'Done',
}

export enum TaskStatusColor {
    TODO = '#8A9299',
    IN_PROGRESS = '#0BA3F8',
    PAUSED = '#D28106',
    DONE = '#25CD7C',
}

export interface ISubtask {
    id: number;
    title: string;
    isDone: boolean;
}

export class Task {
    id: number;
    title: string;
    status: TaskStatusEnum;
    subtasksList: ISubtask[];
    description: string;

    constructor(title: string = 'Untitled') {
        this.id = -1;
        this.title = title;
        this.status = TaskStatusEnum.TODO;
        this.subtasksList = [];
        this.description = 'Description.'
    }
}