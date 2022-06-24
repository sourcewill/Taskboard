export enum ITaskSatatus{
    TODO,
    IN_PROGRESS,
    PAUSED,
    DONE,
}

export interface ITaskChild{
    title: string;
    status: ITaskSatatus;
}

export class Task{
    title: string;
    status: ITaskSatatus;
    childs: ITaskChild[];

    constructor(title: string = 'Untitled'){
        this.title = title;
        this.status = ITaskSatatus.TODO;
        this.childs = [];
    }
}