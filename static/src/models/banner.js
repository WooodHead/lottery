import { query, remove, update, removeBanner } from "../services/banner";

export default {
  namespace: "banner",

  state: {
    list: [],
    selectedRowKeys: [],
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    }
  },

  effects: {
    *loadBanner({ payload }, { call, put }) {
      yield put({ type: "showLoading" });
      payload.sortField = "create_time";
      payload.sortOrder = "desc";
      const data = yield call(query, payload);
      yield put({
        type: "loadBannerSuccess",
        payload: {
          data,
          current: payload.page,
          pageSize: payload.pageSize
        }
      });
      yield put({ type: "hideLoading" });
      yield put({ type: "selectedRowKeys", payload: { selectedRowKeys: [] } });
    },

    *removeBanner({ payload }, { call, put }) {
      yield put({ type: "showLoading" });
      const data = yield call(remove, payload);
      console.log("delete payload", payload);
      // const tableData = yield call(removeBanner, payload);
      if (data && data.success) {
        yield put({
          type: "loadBanner",
          payload: {
            page: 1,
            pageSize: 10
          }
        });
      } else {
        yield put({ type: "hideLoading" });
      }
    },

    *updateBanner({ payload }, { call, put }) {
      yield put({ type: "showLoading" });
      const page = payload.page;
      const pageSize = payload.pageSize;

      delete payload.page;
      delete payload.pageSize;

      const data = yield call(update, payload);

      if (data && data.success) {
        yield put({
          type: "loadBanner",
          payload: {
            page: page,
            pageSize: pageSize
          }
        });
      } else {
        yield put({ type: "hideLoading" });
      }
    }
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false };
    },
    selectedRowKeys(state, action) {
      return { ...state, selectedRowKeys: action.payload.selectedRowKeys };
    },
    loadBannerSuccess(state, action) {
      const actionData = action.payload.data;
      return {
        ...state,
        list: actionData.data.record,
        selectedRowKeys: [],
        pagination: {
          current: action.payload.current,
          pageSize: action.payload.pageSize,
          total: actionData.data.totalRecord || 0
        }
      };
    }
  }
};
