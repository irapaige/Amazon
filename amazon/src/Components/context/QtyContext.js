import { useState, createContext } from 'react';

const QtyContext = createContext();
export const QtyProvider = (props) => {
  const [qty, setQty] = useState(0);
  return (
    <QtyContext.Provider value={{ qty, setQty }}>
      {props.children}
    </QtyContext.Provider>
  );
};
export default QtyContext;
