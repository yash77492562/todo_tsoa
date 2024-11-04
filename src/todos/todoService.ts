
import {Todo} from "./todo"
export type TodoCreationParams = Pick<Todo,"title"| "description">
// it's same 
// export interface TodoCreationParams {
//     title:string,
//     description:string,
// }
// 1 one is better because where we change a type of title or description in Todo we don't have to chagne it in  TodoCreationParams
export class TodoService{
    public get(todoId:string):Todo{
        return {
            id:todoId,
            title:"mocked todo",
            description:"mocked todo",
            done:false
        }
    }
    public create(TodoCreationParams:TodoCreationParams):Todo{
        console.log("mocked todo");
        return {
            id:"1",
            title:"mocked todo",
            description:"mocked todo",
            done:false
        }
    }
}