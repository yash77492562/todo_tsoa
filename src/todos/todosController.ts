// src/users/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { Todo } from "./todo";
  import { TodoService,TodoCreationParams } from "./todoService";
  
  @Route("todo")
  export class TodoController extends Controller {
    /**
    * This is the controller for creating todo
    */
    @Get("{todoId}")
    public async getTodo(
      @Path() todoId: string
    ):Promise<Todo> {
      let todoService = new TodoService();
      return todoService.get(todoId)
    }
  }