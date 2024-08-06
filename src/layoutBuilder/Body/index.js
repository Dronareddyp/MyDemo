import ConfigurationContext from '../../context/ConfigurationContext'

const Body=()=>(
    <ConfigurationContext.Consumer>
        {value=>{
             const {
                showContent,
                showLeftNavbar,
                showRightNavbar,
              } = value
    return(        
        <div>
            {showLeftNavbar &&
            <div>
            <h1>Left Navbar Menu</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
            </div>
            }
            {showContent  &&
            <div>
                <h1>Content</h1>
                <p>Lorem ipsum</p>
            </div>
            }
        {showRightNavbar &&
            <div>
                <h1>Right Navbar</h1>
                <ul>
                    <li>Ad1</li>
                    <li>Ad2</li>
                </ul>
            </div>
        }

        </div>
    )
        }
    }
    </ConfigurationContext.Consumer>
)
export default Body