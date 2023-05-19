import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NoSsr } from 'next/dynamic';

function PopupBox({ children }) {
  return (
    <NoSsr>
    <Popup trigger={<button>Open Popup</button>} modal>
      {(close) => (
        <div>
          <button onClick={close}>&times;</button>
          {children}
          <div>sncjsnsncn</div>
        </div>
      )}
    </Popup>
  </NoSsr>
    
  );
}

export default PopupBox;
