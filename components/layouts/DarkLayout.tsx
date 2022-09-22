import { FC, ReactNode } from "react"

type Props = {
  children:ReactNode
}

export const DarkLayout:FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'whitesmoke',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <h3>Dark Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}
