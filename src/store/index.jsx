import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  maxSupply: 3333,
  nfts: 0,
})

// const setAlert = (msg, color = 'green') => {
//   setGlobalState('alert', { show: true, msg, color })
//   setTimeout(() => {
//     setGlobalState('alert', { show: false, msg: '', color })
//     setGlobalState('loading', false)
//   }, 8000)
// }

// const setLoadingMsg = (msg) => {
//   const loading = getGlobalState('loading')
//   setGlobalState('loading', { ...loading, msg })
// }

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  // setAlert,
  // setLoadingMsg,
}



