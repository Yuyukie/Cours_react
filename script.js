function Header() {
    return (<h1>La maison jungle</h1>)
  }
  
  function Description() {
      return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
  }
  
  ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))
  
  ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))