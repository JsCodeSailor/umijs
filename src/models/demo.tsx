export default {
    namespace: 'demo',
    state: {
      name: 333,
      age: 444,
    },
    reducers: {   //同步更新state
      setState(state, { payload }) {
        return {
          ...state,
          ...payload,
        };
      },
    },
    effects: {  //异步操作
      *changeName({ payload }, { put }) {
          yield put({
              type:'setState',
              payload:{
                  name:payload.name,
              }
          })
      },
    },
  };
  