import React, { useState, useMemo } from 'react';

export const LevelContext = React.createContext<any>(0);
export const WordsContext = React.createContext<any>([]);
const LevelProvider = ({ children }: any) => {
  const [level, setLevel] = useState<number | null>(null);
  const [words, setWords] = useState<any>({});
  const value = useMemo(() => ({ level, setLevel }), [level]);
  const valueWords = useMemo(() => ({ words, setWords }), [words]);
  return (
    <LevelContext.Provider value={value}>
      <WordsContext.Provider value={valueWords}>
        {children}
      </WordsContext.Provider>
    </LevelContext.Provider>
  );
};

export default LevelProvider;