import "../styles/Testimonial.css";

function Testimonial(props) {
    return (
        <div className="testimonial">
            <img
                className="img-testimonial"
                src={props.testimonial.picture}
                alt={props.testimonial.pictureDescription}
            />
            <div className="container-testimonial-text">
                <p className="witness"><strong>{props.testimonial.name}</strong> in {props.testimonial.country}</p>
                <p className="witness-profession">{props.testimonial.profession} at <strong>{props.testimonial.company}</strong></p>
                <p className="testimonial-text">"{props.testimonial.testimonial}"</p>
            </div>
        </div>
    );
}

export default Testimonial;