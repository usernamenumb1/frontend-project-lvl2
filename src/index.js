import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parse.js';
import stylish from './formaters/stylish.js';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');

const compare = (obj1, obj2) => {
  const res = {};
  const arrkeys = Object.keys({ ...obj1, ...obj2 });
  const keys = _.sortBy(arrkeys);
  keys.forEach((key) => {
    if (_.has(obj2, key) && _.has(obj1, key)) {
      if (obj2[key] === obj1[key]) {
        res[`${key}`] = obj2[key];
      } else if (_.isObject(obj2[key]) && _.isObject(obj1[key])) {
        res[`${key}`] = compare(obj1[key], obj2[key]);
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
  return res;
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const extention1 = path.extname(filepath1);
  const extention2 = path.extname(filepath2);
  const firstTree = parse(extention1, data1);
  const secondTree = parse(extention2, data2);
  const compared = compare(firstTree, secondTree);
  switch (format) {
    case 'stylish':
      return stylish(compared);
    default:
      throw new Error(`Output format ${format} not exist`);
  }
};

export default genDiff;
