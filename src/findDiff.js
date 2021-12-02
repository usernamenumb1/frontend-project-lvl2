import _ from 'lodash';

const findDiff = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.has(obj2, key) && _.has(obj1, key)) {
      if (value1 === value2) {
        return { type: 'same', key, val: value2 };
      }
      if (_.isObject(obj2[key]) && _.isObject(obj1[key])) {
        return { type: 'node', key, children: findDiff(value1, value2) };
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

export default findDiff;
