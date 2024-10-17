
import { createContext, useState } from 'react';

export const AppContext = createContext();

export default AppProvider = ({ children }) => {
  const [Produt, SetProdut] = useState([]);

  console.log("Carrinho Atualizado:", Produt)
  return (
    <AppContext.Provider value={[Produt, SetProdut]}>
      {children}
    </AppContext.Provider>
  );
};




