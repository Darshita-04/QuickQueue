import { QRCodeCanvas } from "qrcode.react"

const Home = () => {
  return (
    <div className="qr-wrapper">
      <div>
        <h1><span>SCAN</span> & save your spot</h1>
        <p className="subheading">Join the queue instantly using your phone</p>
      </div>
      <div>
        <div className="qr-canvas"><QRCodeCanvas size={300} value={'http://192.168.2.12:3000/checkin'} /></div>
      </div>
    </div>
  )
}

export default Home