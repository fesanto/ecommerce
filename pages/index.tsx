import Head from "next/head";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

//const Home: React.FC = () => {   ****não esqueça de exportar ao final****
export default function Home() {
  return (
    <div>
      <Head>
        <title>The E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home</h1>
        <p>
          Cat playing a fiddle in hey diddle diddle?. Missing until dinner time
          kitty. Cough hairball, eat toilet paper love me! so inspect anything
          brought into the house, but kitty kitty pussy cat doll. Fight an
          alligator and win intently sniff hand, so get poop stuck in paws
          jumping out of litter box and run around the house scream meowing and
          smearing hot cat mud all over why must they do that, hell is other
          people and this human feeds me, i should be a god. Meow and walk away
          hide from vacuum cleaner. Scratch the furniture time to go zooooom
          push your water glass on the floor i like cats because they are fat
          and fluffy making bread on the bathrobe. Sit as close as possible to
          warm fire without sitting on cold floor.{" "}
        </p>
      </main>
    </div>
  );
}

//export default Home;
