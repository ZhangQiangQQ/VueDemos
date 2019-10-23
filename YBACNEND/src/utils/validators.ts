export const nonEmptyValidator = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('该项不能为空'));
  } else {
    callback();
  }
};
