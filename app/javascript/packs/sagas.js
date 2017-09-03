import { spawn } from 'redux-saga/effects'

import { rootSaga as BookmarkSaga } from './sagas/bookmark'

export default function * () {
  return yield [
    spawn(BookmarkSaga)
  ]
}
