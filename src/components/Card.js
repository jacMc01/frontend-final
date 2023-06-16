const Card = (props) => {

  const convertArrayToString = (array) => {
    const formattedArray = array.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return formattedArray.join(' - ');
  }

  return(
    <>

        <div className="cards__container-card">
          <img src={props.image} alt="" className="cards__image"/>
          <h4 className="cards__title">{props.name}</h4>
          <p className="cards__description">{convertArrayToString(props.types)}</p>
        </div>

    </>

    )
}

export default Card;
