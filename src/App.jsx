import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Octavian"/>
      <UserGreeting isLoggedIn={false} username="Liviu"/>


    </>
  )
}

export default App
