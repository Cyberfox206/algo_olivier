import { describe, expect, it } from "vitest";
import { tableau } from "../app";

describe("test", () => {
    it("tableau", () => {
        expect(tableau()).toEqual([[1, 2, 3], [12, 13, 20], [12, 15, 40], [12, 16, 50], [50, 42, 21]])
    })
})