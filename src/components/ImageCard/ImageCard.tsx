import style from "./ImageCard.module.css";

interface ImageCardProps {
    card: {
        urls: {
            raw: string;
            full: string;
        };
    };
    setImageModal: (url: string) => void;
    toggleModal: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ card, setImageModal, toggleModal }) => {
    const handleClickCard = () => {
        setImageModal(card.urls.full);
        toggleModal();
    };

    return (
        <li className={${style.card}}>
            <img
                src={card.urls.raw}
                onClick={handleClickCard}
                loading='lazy'
                className='w-full h-full'
                alt=''
            />
        </li>
    );
};

export default ImageCard;
