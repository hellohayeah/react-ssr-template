import React from 'react'
import { useDispatch } from 'react-redux'
import { setLocale } from '../../store/languages/actions'
import { Locale } from '../../store/languages/types'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const handleLocaleChange = (e: React.FormEvent<HTMLButtonElement>) => {
    dispatch(setLocale(e.currentTarget.value as Locale))
  }

  return (
    <div className="home">
      <div className="container">
        <button value="zh_TW" onClick={handleLocaleChange}>
          Taiwanese
        </button>
        <button value="en_US" onClick={handleLocaleChange}>
          English
        </button>
      </div>
    </div>
  )
}

export default Home
