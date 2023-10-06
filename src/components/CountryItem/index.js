import './index.css'

const CountryItem = props => {
  const {countryDetails, renderOnClick} = props
  const {name, isVisited, id} = countryDetails
  const text = isVisited ? 'Visited' : 'Visit'
  const onClickOfBtn = () => {
    renderOnClick(id)
  }
  return (
    <li className="list-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="name">{text}</p>
      ) : (
        <button type="button" className="visited-button" onClick={onClickOfBtn}>
          {text}
        </button>
      )}
    </li>
  )
}

export default CountryItem
