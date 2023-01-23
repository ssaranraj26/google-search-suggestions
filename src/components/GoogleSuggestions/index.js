import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index.css'

import './index.css'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-input-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="search-input"
              type="search"
              value="search"
              placeholder="Search Google"
            />
            <ul>
              {suggestionsList.map(each => (
                <SuggestionItem key={each.id} SuggestionItemDetails={each} />
              ))}
            </ul>
            <SuggestionItem />
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
