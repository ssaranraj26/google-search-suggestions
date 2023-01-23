import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails} = props
  const {suggestion} = suggestionItemDetails
  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <img
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
