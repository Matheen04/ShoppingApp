import './App.css';
import LoginComponent from './Components/LoginComponent';

//const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function App() {

  function x() {
    var b=900;
    function y(){
      var a =7
      function z() {
        console.log(a)
        console.log(b)
      }
      console.log("a")
        z();
    }
    y();
  }
  var a = x();

  console.log("erverv")
  console.log(a)

  
  
  return (
    <LoginComponent />
  );
}

export default App;
