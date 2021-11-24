import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');

const compare = (obj1, obj2) => {
  const res = {};
  const arrkeys = Object.keys({ ...obj1, ...obj2 });
  const keys = _.sortBy(arrkeys);
  keys.forEach((key) => {
    if (_.has(obj2, key) && _.has(obj1, key)) {
      if (obj2[key] === obj1[key]) {
        res[`  ${key}`] = obj2[key];
      } else {
        res[`- ${key}`] = obj1[key];
        res[`+ ${key}`] = obj2[key];
      }
    } else if (!_.has(obj2, key) && _.has(obj1, key)) {
      res[`- ${key}`] = obj1[key];
    } else {
      res[`+ ${key}`] = obj2[key];
    }
  });
  return JSON.stringify(res);
};

const genDiff = (ftree, stree) => {
  const firstTree = JSON.parse(readFile(ftree));
  const secondTree = JSON.parse(readFile(stree));
  console.log(compare(firstTree, secondTree));
  return compare(firstTree, secondTree);
};

export default genDiff;
