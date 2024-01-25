// Write your code here
import './index.css'

const PlanetItem = props => {
  const {solarSystemList} = props
  const {name, imageUrl, description} = solarSystemList
  return (
    <div className="planet">
      <img src={imageUrl} alt={`planet ${name}`} className="planetImage" />
      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
