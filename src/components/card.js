function Card(props) {
    return (
        <div className="custom-container">
            <div className="card custom-card">
                <div className="card-body">
                    <h5 className="card-header custom-header">{props.title}</h5>
                    <p className="card-text custom-description">{props.description}</p>
                    {props.body}
                </div>
            </div>
        </div>
    );
}

export default Card;