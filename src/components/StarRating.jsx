import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const empyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="d-flex align-items-center gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} color="#ffc107" />
            ))}

            {hasHalfStar && <FaStarHalfAlt color="#ffc107" />}

            {[...Array(empyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} color="#ffc107" />
            ))}
        </div>
    );
};

export default StarRating;