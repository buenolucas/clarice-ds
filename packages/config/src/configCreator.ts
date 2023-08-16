import deepmerge from "deepmerge";

const overwriteMerge = (_: any, sourceArray: any) => {
  return sourceArray;
};

export const configCreator = <T extends Record<string, any>>(
  defaultConfig: T = {} as T // | (()=>void
) => {
  return (
    config: T = {} as T,
    deepmergeConfig?: { arrayMerge: "append" | "overwrite" }
  ) => {
    console.log("MERGE", config);
    return deepmerge<T>(defaultConfig, config, {
      arrayMerge:
        deepmergeConfig?.arrayMerge === "overwrite"
          ? overwriteMerge
          : undefined,
    });
  };
};

// export const withConfigCreator = <T extends Record<string, any>>(
//   defaultConfig: T = {} as T | ((baseConfig: T) => void) as T
// ) => {

//  withConfigCreator(defaultConfig())
//   }

//   return (
//     config: T = {} as T,
//     deepmergeConfig?: { arrayMerge: "append" | "overwrite" }
//   ) => {
//     return

//     deepmerge<T>(defaultConfig, config, {
//       arrayMerge:
//         deepmergeConfig?.arrayMerge === "overwrite"
//           ? overwriteMerge
//           : undefined,
//     });
//   };
// };
