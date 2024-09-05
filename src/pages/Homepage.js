import About from './../components/About';
import Banner from './../components/Banner';

export default function Homepage(){
  
    return(
        <>
        <About tag={"Homepage"} arr={[1,2,3,4,5,6]} />
        <Banner/>
        </>
    );
}
