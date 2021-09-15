import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello next</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor eveniet fuga repellendus officia rerum perspiciatis maiores aut laudantium nemo dicta placeat autem, eligendi vitae amet cumque facilis ipsam eum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero modi ab perferendis. At hic voluptates delectus praesentium dolorem aliquid qui. Quibusdam nesciunt explicabo possimus neque delectus veritatis, earum numquam.</p>
      <Footer />
      </div>
  )
}
