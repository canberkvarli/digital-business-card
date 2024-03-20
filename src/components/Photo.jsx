import headshot from "../assets/headshot.png"

export default function Photo() {
  return (
    <div>
        <img 
        src={headshot} 
        alt="Headshot of Canberk" 
        width={300} 
        style={
            {borderTopLeftRadius: "2%", borderTopRightRadius: "2%"}
            } />
    </div>
  )
}