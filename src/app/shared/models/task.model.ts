export enum TaskStatusEnum{
    TODO,
    IN_PROGRESS,
    PAUSED,
    DONE,
}

export interface ITaskChild{
    title: string;
    status: TaskStatusEnum;
}

export class Task{
    id: number;
    title: string;
    status: TaskStatusEnum;
    childs: ITaskChild[];

    constructor(title: string = 'Untitled'){
        this.id = -1;
        this.title = title;
        this.status = TaskStatusEnum.TODO;
        this.childs = [];
    }
}