import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
test('gendiff/plain/json', () => {
  const file1 = getFixturePath('file1plain.json');
  const file2 = getFixturePath('file2plain.json');
  const result = readFile('resultplain.txt', 'utf-8');
  expect(genDiff(file1, file2)).toEqual(result);
});

test('gendiff/stylish/json', () => {
  const file1 = getFixturePath('file1stylish.json');
  const file2 = getFixturePath('file2stylish.json');
  const result = readFile('resultstylish.txt', 'utf-8');
  expect(genDiff(file1, file2)).toEqual(result);
});

test('gendiff/stylish/yaml', () => {
  const file1 = getFixturePath('file1stylish.yml');
  const file2 = getFixturePath('file2stylish.yml');
  const result = readFile('resultstylish.txt', 'utf-8');
  expect(genDiff(file1, file2)).toEqual(result);
});

test('gendiff/yaml', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const result = readFile('resultplain.txt', 'utf-8');
  expect(genDiff(file1, file2)).toEqual(result);
});
test('gendiff/different extention', () => {
  const file1 = getFixturePath('file1.txt');
  const file2 = getFixturePath('file2.txt');
  expect(() => genDiff(file1, file2)).toThrow(Error);
});
