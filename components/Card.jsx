import styles from "../styles/Card.module.scss";
import { useState, useRef, useEffect } from "react";

function Card({ icon: Icon, title, name, onCardClick }) {
    const [isRotating, setIsRotating] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleAnimationEnd = () => {
            setIsRotating(false);
        };

        const card = cardRef.current;
        card.addEventListener('animationend', handleAnimationEnd);

        return () => {
            card.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    const handleClick = () => {
        setIsRotating(true);
        onCardClick(name);
    };

    return (
        <div
            ref={cardRef}
            className={`${styles.card} ${isRotating ? styles.rotate : ""}`}
            onClick={handleClick}
        >
            <Icon size={50} title={title} />
            <p>{title}</p>
        </div>
    );
}

export default Card;