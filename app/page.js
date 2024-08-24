import Image from "next/image";
import styles from "./page.module.css";
import home from "./homepage.module.css";



export default function Home() {
  return (
    <main className='main'>
      <div className={home.body}>
        
        <div className={home.hiro}>
            <div>
                <span className={home.greetings}>HI I AM</span>
                <h1 className={home.name}>REYAN</h1>
                <div className={home.calling}>
                    <span className={home.callingText}>A JUNIOR <br /> WEB DEVELOPER | SEO STRATEGIST </span>
                </div>
            </div>
        </div>
    
      </div>
      
    </main>
  );
}
