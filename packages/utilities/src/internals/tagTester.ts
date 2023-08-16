import { toString } from "./setup";
// Internal function for creating a `toString`-based type tester.
export function tagTester(name: String) {
  var tag = "[object " + name + "]";
  return function (obj: any) {
    return toString.call(obj) === tag;
  };
}
