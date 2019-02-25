import { callbackify } from 'util';

export default {
  namespace: 'todo',
  state: {
    name: 111,
    age: 222,
  },
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *changeName({ payload }, { put }) {
        put({
            type:'setState',
            payload:{
                name:payload.name,
            }
        })
        
    },
  },
};
