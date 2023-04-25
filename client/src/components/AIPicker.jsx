import CustomButton from "./CustomButton"


const AIPicker = ({prompt, setPrompt, generateImg, handleSubmit}) => {
  return (
    <div className="aipicker-container">
     <textarea 
     className="aipicker-textarea"
     placeholder="ask AI"
     value={prompt}
     rows={5}
     onChange={(e) => setPrompt(e.target.value)}
     >

     </textarea>
    </div>
  )
}

export default AIPicker
