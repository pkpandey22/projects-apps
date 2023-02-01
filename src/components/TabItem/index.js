// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTab, clickTabItem} = props
  const {displayText, tabId} = eachTab

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className="btn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
