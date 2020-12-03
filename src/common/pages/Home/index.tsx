import React from 'react'
import s from './Home.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../../store/actions'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state)

  return (
    <div className={s.home}>
      <div className="container">
        <p>{count}</p>
        <button onClick={() => dispatch(addCount())}>++</button>
      </div>
    </div>
  )
}

export default Home