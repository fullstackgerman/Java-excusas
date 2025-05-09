import { expect, test } from "vitest";
import { sayHello } from "./app";

test('Checks that the sayHello function actually says "hello".', () => {
    expect(sayHello()).toContain("Hello");
});
