import { defineTypes } from '../utils/defineTypes'
import http from '../utils/http'
import { put, call, takeEvery } from 'redux-saga/effects'
import { startSubmit, stopSubmit, reset } from 'redux-form'
import { FORM_NAME } from '../forms/bookmark'

export const bookmarkGetTypes = defineTypes('BOOKMARKS/GET')
export const bookmarkCreateTypes = defineTypes('BOOKMARKS/CREATE')
export const bookmarkDeleteTypes = defineTypes('BOOKMARKS/DELETE')

export const initialState = {
  list: []
}

export const actions = {
  fetch () {
    return { type: bookmarkGetTypes.REQUEST }
  },
  create (attributes) {
    return { type: bookmarkCreateTypes.REQUEST, attributes }
  },
  delete (id) {
    return { type: bookmarkDeleteTypes.REQUEST, id }
  }
}

export const selectors = {
  getBookmarks: ({ bookmark }) => bookmark.list
}

export const reducer = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case bookmarkDeleteTypes.REQUEST:
    case bookmarkCreateTypes.REQUEST:
    case bookmarkGetTypes.REQUEST:
      return { ...state, ...payload, loading: true }
    case bookmarkCreateTypes.SUCCESS:
    case bookmarkCreateTypes.FAILURE:
    case bookmarkGetTypes.SUCCESS:
    case bookmarkGetTypes.FAILURE:
    case bookmarkDeleteTypes.SUCCESS:
    case bookmarkDeleteTypes.FAILURE:
      return { ...state, ...payload, loading: false }
    default:
      return state
  }
}

export function * fetchBookmarksSaga () {
  try {
    const response = yield call(http.get, '/bookmarks')

    yield put({ type: bookmarkGetTypes.SUCCESS, list: response })
  } catch (error) {
    yield put({ type: bookmarkGetTypes.FAILURE, error })
  }
}

export function * createBookmarkSaga ({ attributes }) {
  try {
    yield (put(startSubmit(FORM_NAME)))

    yield call(http.post, '/bookmarks', { bookmarks: attributes })

    yield put({ type: bookmarkCreateTypes.SUCCESS, attributes: {} })
    yield put(reset(FORM_NAME))
    yield call(fetchBookmarksSaga)
  } catch (error) {
    yield (put(stopSubmit(FORM_NAME)))
    yield put({ type: bookmarkCreateTypes.FAILURE, error })
  }
}

export function * deleteBookmarkSaga ({ id }) {
  try {
    yield call(http.delete, `/bookmarks/${id}`)

    yield put({ type: bookmarkDeleteTypes.SUCCESS, id: null })
    yield call(fetchBookmarksSaga)
  } catch (error) {
    yield put({ type: bookmarkDeleteTypes.FAILURE, error })
  }
}

export function * rootSaga () {
  yield [
    takeEvery(bookmarkGetTypes.REQUEST, fetchBookmarksSaga),
    takeEvery(bookmarkCreateTypes.REQUEST, createBookmarkSaga),
    takeEvery(bookmarkDeleteTypes.REQUEST, deleteBookmarkSaga)
  ]
}
