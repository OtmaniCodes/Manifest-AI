import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Commendments.css'
import commendments from './Ten-Commendments';
const Commendments = () => {
    const [text, setText] = useState('');
    const content = "Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.Hello World! This text will write itself.";
  
    const textContainerRef = useRef(null);
  const [prevHeight, setPrevHeight] = useState(null);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === content.length) {
        clearInterval(intervalId);
      } else {
        const nextChar = content[currentIndex];
        setText(prevText => prevText + nextChar);
        currentIndex++;

        // Check if the text wraps to the next line
        const textContainer = textContainerRef.current;
        if (textContainer) {
          const currentHeight = textContainer.clientHeight;
          if (prevHeight && currentHeight > prevHeight) {
            console.log('Text wrapped to the next line');
          }
          setPrevHeight(currentHeight);
        }
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, [prevHeight]);
  const handleClick = (e) => {
    document.getElementById(e.target.dataset.title).scrollIntoView({ behavior: 'smooth' });
  };

    return ( 
        <div className="container commendments-container">
            <SectionTitle title={"Commendment"} subTitle={""}/>
            <div className='row'>
                <div className='col-9'>
                    {commendments.map((e,i)=>(
                        <div id={e.title} key={i} className='commendment-contenet'>
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                        </div>
                    ))}
                </div>
                <div className="col">
                    <div className='commendment-map border shadow'>
                        <h4 className='lead'>commendment map</h4>
                        <ul>
                            {commendments.map((item,i)=>(
                                <li key={i} data-title={item.title} onClick={(e) => handleClick(e)}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* <div id='test' className='text-muted old-paper'>{text}</div>;
                <div ref={textContainerRef} className="text-container">
                    <div className="text">{text}</div>
                </div> */}
            </div>
        </div>
     );
}
 
export default Commendments;