import Display from "./Display";

const Button = ({country}) => {
  return (
      <button onClick={() => handleButton(country)} type="button">Show</button>
  )
}

const handleButton = (country) => {
  console.log("Clicked button", country)
  
  return (
    <div>
      <Display country={country} />
      <p>HI</p>
    </div>
  )
}

export default Button;
export {handleButton};