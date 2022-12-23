import React from 'react'
import Button from 'react-bootstrap/Button'
import { MdClose } from 'react-icons/md';

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner text-bg-light">
        <Button className="btn-danger btn-sm popup-btn" onClick={() => props.setTrigger(false)}><MdClose className='pb-1' /></Button>
        { props.children }
      </div>
    </div>
  ) : ""
}

export default Popup
