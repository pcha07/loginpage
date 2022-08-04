import LoginForm from "./components/LoginForm";
import Picture from "./components/Picture";

function App() {
  return (
    <div className="flex flex-col items-center justify-center overflow-y-hidden bg-white lg:grid grid-cols-2 lg:items-start w-full h-screen">
      <LoginForm />
      <Picture />
    </div>
  );
}

export default App;
