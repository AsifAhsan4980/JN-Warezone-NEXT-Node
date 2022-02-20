import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box} from '@mui/material'
import HomePage from "../component/home";
import path from "path";
import fs from "fs";
import {Props} from "framer-motion/types/types";

const Home: NextPage = (props) => {
  const p: Props = props
  return (
    <Box>
      <Head>
        <title>JN Wearzone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
      </Head>
        <HomePage {...p}/>
    </Box>
  )
}
export async function getStaticProps() {


  const filePath : any = path.join(process.cwd(), 'data', 'data.json')
  const data = await fs.readFileSync(filePath)
  const parsedata = JSON.parse(data as unknown as string )

  return {
    props: {
      parsedata
    }, // will be passed to the page component as props
  }
}

export default Home
