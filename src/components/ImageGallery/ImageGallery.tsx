interface ImageGalleryProps {
    children: React.ReactNode;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ children }) => {
    return (
        <>
            <ul className='flex w-10/12 mx-auto my-5 gap-4 items-center flex-wrap'>
                {children}
            </ul>
        </>
    );
};

export default ImageGallery;
