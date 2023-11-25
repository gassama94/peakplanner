export default function Input({ label, textarea, ...props}){
  return (
    <div>
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
      
    </p>
  </div>

  )
}