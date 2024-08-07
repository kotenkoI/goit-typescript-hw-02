import style from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <div className='w-svw h-svh flex justify-center items-center'>
            <span className={style.loader}></span>
        </div>
    );
};

export default Loader;
