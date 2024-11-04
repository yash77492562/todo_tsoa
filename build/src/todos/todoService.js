"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
// it's same 
// export interface TodoCreationParams {
//     title:string,
//     description:string,
// }
// 1 one is better because where we change a type of title or description in Todo we don't have to chagne it in  TodoCreationParams
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
    create(TodoCreationParams) {
        console.log("mocked todo");
        return {
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
}
exports.TodoService = TodoService;
