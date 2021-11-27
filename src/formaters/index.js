import stylish from './stylish.js';
import plain from './plain.js';

export default (coll, format) => {
  switch (format) {
    case 'stylish':
      return stylish(coll);
    case 'plain':
      return plain(coll);
    case 'json':
      return JSON.stringify(coll);
    default:
      throw new Error(`Output format ${format} not exist`);
  }
};
