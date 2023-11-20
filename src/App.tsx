import { FaCopy, FaLink, FaCheck, FaCircleNotch } from "react-icons/fa6";
import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instruction from "./components/Instruction";
import shorten from "./api";

function App() {

  const [longUrl, setlongUrl] = useState<string>("");
  const [shortUrl, setshortUrl] = useState<string>("");
  const [copied, setcopied] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const handleShorten = async () => {
    if (longUrl.length > 0){

      setloading(true);
      let res = null;
      try {
        res = await shorten(longUrl);
        
      } catch (error) {
        res = error;
      }
      
      setshortUrl(res);
      setloading(false);
    }
  }
  
  const handleCopy = () => {
    if (shortUrl.length > 0) {

      setcopied(true);
      setTimeout(() => {
        setcopied(false);
      }, 5000);
    }
  }
  return (
    <>
      <Header />
      <section className="w-full py-12">
        <div className="flex flex-col lg:flex-row justify-center mx-2">
          <input className="w-full lg:w-1/2 p-2 border-2 focus:outline-none focus:border-green-600" type="text" onChange={(e) => setlongUrl(e.target.value)} name="url" id="url" placeholder="Type or Paste url" />
          <button className={`${longUrl.length>0? 'bg-green-600':'bg-gray-400'} p-2 lg:p-4 text-white`} onClick={handleShorten} >
            {!loading ? 
           <span className="flex justify-center gap-x-2 text-2xl">Shorten URL <FaLink /></span>:
           <span className="animate-spin">
             <FaCircleNotch /> 
           </span>
          }
          </button>
        </div>
        {shortUrl.length > 0 &&
          <div className="flex flex-col lg:flex-row justify-center pt-4 mx-2">
            <input className="w-full lg:w-1/2 p-2 border-2" type="text" name="short-url" id="short-url" disabled value={shortUrl} />
            <CopyToClipboard text={shortUrl} onCopy={handleCopy} >
              {copied ?
                <p className="p-4 flex gap-x-2 text-2xl text-green-600"> <FaCheck /> copied</p>
                :
                <button className="bg-gray-500 hover:bg-gray-600 delay-200 transition-colors ease-linear p-2 lg:p-4 text-white flex justify-center gap-x-2 text-2xl" onClick={handleCopy}> Copy <FaCopy /> </button>
              }
            </CopyToClipboard>
          </div>
        }
      </section>
      <Instruction />
      <Footer />
    </>
  )
}

export default App;
