import loading from './loading.gif'
const Loader = () => {
  return (
    <div className='loader'>
      <img src={loading} alt="infinity giratorio-Loading" />
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader
