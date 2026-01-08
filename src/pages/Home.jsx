import { QRCodeCanvas } from "qrcode.react"

const Home = () => {
  return (
    <QRCodeCanvas size={300} value={'http://192.168.2.12:3000/checkin'} />
  )
}

export default Home