import './App.css'
import { useState, useCallback } from 'react'
import _ from 'lodash'

function App() {
  const [searchText, setSearchText] = useState('')
  const [inputText, setInputText] = useState('')

  const debounce = (callback, delay) => {
    let timerId = null
    return (...args) => {
      if (timerId) clearTimeout(timerId)
      timerId = setTimeout(() => {
        callback(...args)
      }, [delay])
    }
  }

  const handleSearchText = useCallback(
    debounce((text) => {
      setSearchText(text)
    }, 1000),
    []
  )

  //공통함수
  const handleChange = (e) => {
    setInputText(e.target.value)
    handleSearchText(e.target.value)
  }
  return (
    <div
      style={{
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <h1>디바운싱 예제</h1>
      <input
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요"
        style={{ width: '300px' }}
        type="text"
        onChange={handleChange}
      />
      <p>Search Text : {searchText} </p>
      <p>Input Text : {inputText}</p>
    </div>
  )
}

export default App
