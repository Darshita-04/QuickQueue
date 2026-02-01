import { QRCodeCanvas } from "qrcode.react"
import { auth } from "../../firebase-config";
const Home = () => {
  const user = auth.currentUser; // get logged-in company  
  return (
    <div className="qr-wrapper">
      <div>
        <h1><span>SCAN</span> & save your spot</h1>
        <p className="subheading">Join the queue instantly using your phone</p>
      </div>
      <div>
        <div className="qr-canvas"><QRCodeCanvas size={300} value={`/checkin/${user.uid}`} /></div>
      </div>
    </div>
  )
}

export default Home