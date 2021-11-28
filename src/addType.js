import _ from 'lodash';

const addType = (obj1, obj2) => {
  const arrkeys = Object.keys({ ...obj1, ...obj2 });
  const keys = _.sortBy(arrkeys);
  return keys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.has(obj2, key) && _.has(obj1, key)) {
      if (value1 === value2) {
        return { type: 'same', key, val: value2 };
      }
      if (_.isObject(obj2[key]) && _.isObject(obj1[key])) {
        return { type: 'recursion', key, children: addType(value1, value2) };
      }
      return {
        type: 'updated', key, val1: value1, val2: value2,
      };
    }
    if (!_.has(obj2, key) && _.has(obj1, key)) {
      return { type: 'removed', key, val: value1 };
    }
    return { type: 'added', key, val: value2 };
  });
};

export default addType;
