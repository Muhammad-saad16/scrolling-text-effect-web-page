import Header from "../components/header"
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
        <Header/>  
         <main className="main">
        <div className="h-[500px] flex justify-between items-center bg-black"> 
        <div className="h-[200px] w-full text-yellow-400 font-bold text-[30px] pl-[10px] nl-[20px]">
        
        <div className="marquee">

        Hi, <br />
        I am  <div className="box">Muhammad Saad Raza</div> <br />
        <h1 className="h1">Frontend Developer</h1>
        </div>
      </div>
      </div>
        </main>
        

        <Footer/>
    </div>
      );
}
