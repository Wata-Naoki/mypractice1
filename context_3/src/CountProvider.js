export const useCount = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
      setCount(count + 1);
    };
    const providerValue = useMemo(() => ({count, addCount}), [count]);
    return providerValue;
  }
  
  const providerValue = useCount();
  <CountContext.Provider value={providerValue}>
      <App />
  </CountContext.Provider>