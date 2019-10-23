interface serverCascaderEntity {
  code: number,
  tag: string,
  children?: serverCascaderEntity[]
}

interface cascaderEntity {
  value: number,
  label: string,
  children?: cascaderEntity[]
}

const DEFAULT_INDEX = 0;

export const cascaderFormatter = (data: any) => data.map((i: serverCascaderEntity) => {
  const temp : cascaderEntity = {
    value: i.code,
    label: i.tag,
  };
  if (i.children) {
    temp.children = cascaderFormatter(i.children);
  }
  return temp;
});

export const findLabel = (collections: any, code: any) => {
  const temp = collections.filter((i: any) => i.code === code)[DEFAULT_INDEX];
  return temp ? temp.tag : '';
};

export const inspectLabel = (collections: any, value: any, result: string[] = []): string => {
  Object.keys(collections).forEach(key => {
    const item = collections[key];
    if (item.code && item.tag) {
      item.value = item.code;
      item.label = item.tag;
    }
    if (item.value === value[DEFAULT_INDEX]) {
      result.push(item.label);
      const temp = value.slice(1);
      if (temp.length > 0 && item.children) {
        inspectLabel(item.children, temp, result);
      }
    }
  });
  return result.join('-');
};

export const appendParent = (value: any, division = 100): number[] => {
  const t = [];
  t.unshift(value);
  t.unshift(value - (value % division));
  return t;
};
