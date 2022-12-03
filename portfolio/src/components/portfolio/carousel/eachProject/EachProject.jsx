
const EachProject = ({ name, image, description, link, tec }) => {
    return (
        <div className="eachProject">
            <a href={link} target='_blank'>
                <img src={image} />
                <div className="write">
                    <div className="title">
                        <h3>{name}</h3>
                        <span>{link}</span>
                    </div>
                    <p>{description}</p>
                    <p>Tecnologias utilizadas: {tec}</p>
                </div>
            </a>

        </div>
    )
}

export default EachProject