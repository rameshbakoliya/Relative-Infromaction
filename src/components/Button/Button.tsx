//@ts-nocheck
import './Button.css'

export default function Button({ onClick, Small, Large, Title, className}) {
  
  return (
    <>
      <div>
        <button onClick={onClick} className="submit-btn">
          {Title}      
        </button>
      </div>
    </>
  )
}
