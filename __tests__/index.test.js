import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  ['file1.yml', 'file2.yml', 'resultstylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'resultstylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'resultplain.txt', 'plain'],
];

test.each(cases)('Compare %s and %s to expect %s in "%s" style', (firstArg, secondArg, expectedResult, format) => {
  const firstFile = getFixturePath(firstArg);
  const secondFile = getFixturePath(secondArg);
  const getResult = readFile(expectedResult);
  const result = genDiff(firstFile, secondFile, format);
  expect(result).toEqual(getResult);
});

test('Compare file1.txt and file2.txt to expect Error: .txt format is not supported', () => {
  const file1 = getFixturePath('file1.txt');
  const file2 = getFixturePath('file2.txt');
  expect(() => genDiff(file1, file2)).toThrow(Error);
});

test('Compare file1.json and file2.json to expect Error: Output format shiny not exist', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  expect(() => genDiff(file1, file2, 'shiny')).toThrow(Error);
});
