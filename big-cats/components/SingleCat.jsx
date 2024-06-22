function SingleCat(props) {
    return (
        <div style={{
            width: 400,
            height: 400,
            border: "solid 3px green",
            margin: 5,
            padding: 5,


        }}
        >
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.latinName}</p>
        </div>

    )
}

export default SingleCat;