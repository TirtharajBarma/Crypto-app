import { useState } from "react";
import './style.css'

const InputField = ({ type, placeholder, icon, value, onChange  }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default InputField;