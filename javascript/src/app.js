import {get} from 'lodash';

const obj = {
  data: {
    clientMaster: [
      {
        id: 1,
        clientIds: [
          200000001,
          200000002,
          1
        ]
      },
      {
        id: 10,
        clientIds: [
          200000005,
          10
        ]
      }
    ]
  }
};

const getDuplicateIds = (obj) => {
  const clients = get(obj, 'data.clientMaster').map(val => val.clientIds);
  return [].concat(...clients);
}

const res = getDuplicateIds(obj)
console.log('res', res);
