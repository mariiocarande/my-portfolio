import CardInfo from "@/components/CardInfo"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Home = () => {
  return (
  <>
    <main>
      <div>
        <Header />
        <div className="flex flex-col items-center justify-between p-24">
          <CardInfo text="This is my portfolio"/>
        </div> 
      </div>
    </main>
    <Footer/>
  </>
  )
}

export default Home
