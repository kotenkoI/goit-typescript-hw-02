const ErrorMessage = ({error}) => {
    return (
        <div className='flex justify-center items-center'>
            <h2>Виникла помилка {error.message}.Будь ласка, перезавантажте сторінку</h2>
        </div>
    );
};
export default ErrorMessage