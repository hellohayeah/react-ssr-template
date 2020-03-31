import 'babel-polyfill'
import { delay, takeEvery, all, put } from 'redux-saga/effects'

function* delayAddCount() {
  yield delay(1000)
  yield put({ type: 'ADD_COUNT' })
}

function* watchAddcount() {
  yield takeEvery('DELAY_ADD', delayAddCount)
}

export default function* rootSaga() {
  yield all([watchAddcount()])
}
