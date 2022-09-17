import { useState } from 'react'

function Button({ text }) {
  const [isActive, setIsActive] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      style={{
        width: '25%',
        height: '100%',
        margin: '0 2%',
        background: isActive
          ? '#999999'
          : isHover
          ? '#d6d6d6'
          : 'rgba(51, 51, 51, 0.05)',
        borderRadius: '8px',
        borderWidth: '0',
        display: 'flex',
        justifyContent: 'center',
        aligntItens: 'center',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
        transition: 'all 100ms linear',
      }}
      onClick={() => {
        fetch(`http://localhost:3001/count/${text.toLowerCase()}`, {
          method: 'PATCH',
        })
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => {
        setIsActive(false)
        setIsHover(false)
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsActive(false)
        setIsHover(false)
      }}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <p
        style={{
          color: isActive ? '#fff' : '#333',
          margin: 'auto 0',
        }}
      >
        {text}
      </p>
    </div>
  )
}

export default Button

// hover on mobile error
