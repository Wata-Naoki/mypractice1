export const App = () => {
  // プロバイダーに渡した値を呼び出す
  const {count, addCount} = useContext(CountContext)

return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={addCount}>
      Click me
    </button>
  </div>
);
}