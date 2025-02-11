import User from './User';
function App() {
  let nameA = prompt("ismingizni kiriting");
  return (
    <div>
      <User name={nameA}></User>
    </div>
  );
}

export default App;
