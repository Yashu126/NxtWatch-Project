import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingPage from '../GamingPage'
import './index.css'

class Gaming extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <SideBar />
          <div>
            <GamingPage />
          </div>
        </div>
      </>
    )
  }
}
export default Gaming
