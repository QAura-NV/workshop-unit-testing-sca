import { describe, expect, test } from "@jest/globals";
import { HelloWorldServiceImpl } from "./hello-world.service.ts";

describe("sum module", () => {
  test("check true", async () => {
    const helloWorldService = new HelloWorldServiceImpl();

    const result = await helloWorldService.helloWorld();

    expect(result).toBe("Hello, World!");
  });

  test("it fails", () => {
    expect(true).toBe(false);
  });
});
