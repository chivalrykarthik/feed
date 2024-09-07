import { useEffect } from "react";

const useScrollProgress = ()=>{

    function updateProgressBar() {
        const progressBar:any = document.querySelector('.progress-bar');
        if(progressBar){
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            progressBar.style.width = progress + '%';
        }
      }

      useEffect(()=>{
        updateProgressBar();
        window.addEventListener('scroll', updateProgressBar);
        window.addEventListener('resize', updateProgressBar);

        return ()=>{
            window.removeEventListener('scroll', updateProgressBar);
            window.removeEventListener('resize', updateProgressBar);
        }
      },[])
}

export default useScrollProgress;







