const VisitedCountryItem = props => {
  const {Details, renderOnClick} = props
  const {imageUrl, name, id} = Details
  const onClickOfRemove = () => {
    renderOnClick(id)
  }
  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button type="button" onClick={onClickOfRemove}>
        Remove
      </button>
    </li>
  )
}

export default VisitedCountryItem
