import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import findDiff from './findDiff.js';
import formater from './formatters/index.js';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const extention1 = path.extname(filepath1);
  const extention2 = path.extname(filepath2);
  const firstTree = parse(extention1, data1);
  const secondTree = parse(extention2, data2);
  const typed = findDiff(firstTree, secondTree);
  return formater(typed, format);
};

export default genDiff;
