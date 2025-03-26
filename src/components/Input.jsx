export function Input({label,type = "text",isTextArea = false,...props}) {
return <div className="mb-4"> 
    <label className="block mb-3">{label}</label>
    {isTextArea && <textarea  rows="5" className="border border-gray-300 p-2 rounded-md focus:border-orange-500 focus:outline-none w-full" {...props}></textarea>}
    {!isTextArea && <input type={type} className="border border-gray-300 p-2 rounded-md focus:border-orange-500 focus:outline-none w-full" {...props} />}
</div>
}