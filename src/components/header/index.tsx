import { useEffect, useState } from "react"
import cn from "classnames"
import "./index.less"

export default function Header() {
  const [name, setName] = useState("bobo")
  const [focus, setFocus] = useState(false)

  function getUserInfo() {
    // fetch()
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  function onClickInput({ type }: React.FormEvent) {
    console.log(1)
    setFocus(type === "focus")
  }

  return (
    <header className="header-container">
      <a className="logo" href="/">
        <img alt="logo" src="https://www.v2ex.com/static/img/v2ex@2x.png"></img>
      </a>
      <div className={cn("header-search", { active: focus })}>
        <input onFocus={onClickInput} onBlur={onClickInput} />
      </div>
      <div className="option">
        <ul>
          <a href="https://www.v2ex.com">
            <li>首页</li>
          </a>
          <a href="https://www.v2ex.com/member/bobo2">
            {name && <li>{name}</li>}
          </a>
          <a href="https://www.v2ex.com/notes">
            <li>记事本</li>
          </a>
          <a href="https://www.v2ex.com/t">
            <li>时间轴</li>
          </a>
          <a href="https://www.v2ex.com/settings">
            <li>设置</li>
          </a>
          <a href="https://www.v2ex.com/#">
            <li>登出</li>
          </a>
        </ul>
      </div>
    </header>
  )
}
