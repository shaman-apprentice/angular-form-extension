import { describe, expect, test } from "@jest/globals";
import { FormControl } from "./formControl";
import { tsErrorWhenAny } from "../../test/utils/any.assertion";

describe("formControl", () => {
  test("Metadata is set", () => {
    const control = new FormControl({
      value: 42,
      metadata: "What was the question again?" 
    });
    expect(control.metadata).toBe("What was the question again?");
  });

  test("value is strongly typed", () => {
    const control = new FormControl({
      value: 21,
      metadata: "That is only half the truth, isn't it?" 
    });
    tsErrorWhenAny(control.value)
    expect(control.value * 2).toBe(42);
  })
});


