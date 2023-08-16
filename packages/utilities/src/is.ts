import { tagTester } from "./internals/tagTester";

export const isString = tagTester("String");
export const isObject = tagTester("Object");
export const isFunction = tagTester("Function");
