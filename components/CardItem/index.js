import './index.css'

const CardItem = props => {
  const {className, title, description, imgUrl} = props
  return (
    <li className={`${className} card`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
