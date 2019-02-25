export default {
    namespace: 'add',
    state:{
        list:[
          {
            id:1,
            content:'test',
            done:false
          },
          {
            id:2,
            content:'test2',
            done:true
          }
        ],
        childText: "childText2",
        addText: "Yj"
      },
    // reducers函数接受两个参数：
    // 之前已经累积运算的结果和当前要被累积的值，
    // 返回的是一个新的累积结果。该函数把一个集合归并成一个单值。
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
          yield put({
              type:'setState',
              payload:{
                list:payload.list,
              }
          })
      },
      *add({ payload }, { put, select }) {
        const _list = yield select(state => state.add.list);
        _list.push({
            ...payload
        })
        // yield put({
        //     type:'setState',
        //     payload:{
        //       addText:payload.addText
        //     }
        // })
        console.log('_list->',_list)
        yield put({
            type:'setState',
            payload:{
                // fetch
                list:[..._list],//深度复制
            }
        })
    },
    },
  };
  