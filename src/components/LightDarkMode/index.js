// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: true}

  onButtonClick = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state
    return (
      <div className={isLight ? 'light-box' : 'dark-box'}>
        <h1>Click to Change</h1>
        <button
          type="button"
          className={isLight ? 'dark-btn' : 'light-btn'}
          onClick={this.onButtonClick}
        >
          {isLight ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
