// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onShowContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div>
          <h1>Layout</h1>
          <div>
            <div>
              <input
                id="showContent"
                type="checkbox"
                checked={showContent}
                onChange={onShowContent}
              />
              <label htmlFor="showContent">Content</label>
            </div>
            <div>
              <input
                id="leftNovbar"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onShowLeftNavbar}
              />
              <label htmlFor="leftNovbar">Left Navbar</label>
            </div>

            <div>
              <input
                id="rightNovbar"
                type="checkbox"
                checked={showRightNavbar}
                onChange={onShowRightNavbar}
              />
              <label htmlFor="rightNovbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
