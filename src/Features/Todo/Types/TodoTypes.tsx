import type {PropsWithChildren} from 'react';


export enum Priority{
    Low = "Low",
    Medium = "Medium",
    High = "High"
}


export enum Status{
    Pending =    "Pending",
    InProgress = "InProgress",
    Completed =  "Completed"
}

export type CardType=PropsWithChildren<{
    type:string,
    title: string,
    description: string,
    priority: Priority,
    status : Status,
    dueDate: Date,
    category:string,
    index:number,
    handleEdit:()=>void,
    handleDelete:()=>void
    handleStatus:()=>void
}>



