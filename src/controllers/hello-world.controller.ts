import { Router, type Request, type Response } from "express";
import type { HelloWorldService } from "../services/hello-world.service.ts";
import { HelloWorldServiceImpl } from "../services/implementation/hello-world.service.ts";

export class HelloWorldController {
  #helloWorldService: HelloWorldService;
  #router: Router;

  constructor(
    helloWorldService: HelloWorldService = new HelloWorldServiceImpl(),
    router: Router = Router()
  ) {
    this.#helloWorldService = helloWorldService;
    this.#router = router;

    this.#router.get("/", this.helloWorld.bind(this));
  }

  get router() {
    return this.#router;
  }

  async helloWorld(req: Request, res: Response) {
    const data = await this.#helloWorldService.helloWorld();
    res.status(200).json({
      data,
    });
  }

  async byeWorld(req: Request, res: Response) {
    const data = await this.#helloWorldService.byeWorld();
    res.status(200).json({
      data,
    });
  }
}
