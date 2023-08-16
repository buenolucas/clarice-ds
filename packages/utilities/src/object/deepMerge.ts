// export function deepMerge(target: any, source: any) {
//   const result = { ...target, ...source };
//   for (const key of Object.keys(result)) {
//     result[key] =
//       typeof target[key] == "object" && typeof source[key] == "object"
//         ? deepMerge(target[key], source[key])
//         : structuredClone(result[key]);
//   }
//   return result;
// }

import { isObject } from "../is";

export function deepMerge<T>(target: any, source: any) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, {
            [key]: source[key],
          });
        else output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, {
          [key]: source[key],
        });
      }
    });
  }
  return output as T;
}
