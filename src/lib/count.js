import json from './count.json'

export const getCount = () => {
  return json[0].count
}

// export const updateCount = (count) => {
//   const newCount = [{
//       count
//     }]
// writeJsonFile('count.json', [{count: count}]).then(() => {
//   console.log('done');
// });
// }