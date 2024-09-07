import useScrollProgress from '../hooks/useScrollProgress';

const LoadingScrollProgress = ()=>{
    useScrollProgress();
    return (
        <div className="progress-bar-container">
            <div className="progress-bar"></div>
        </div>
        )
}


export default LoadingScrollProgress;