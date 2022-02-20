import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from "next/image";
import ss1 from "../../public/ss2.jpg"
import ss2 from "../../public/peakpx.jpg"
import ss3 from "../../public/peakpx (1).jpg"

const Carousels=()=>
{
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image : ss1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image : ss2
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image : ss3
        }
    ];

    return (
        <Carousel  next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                   prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

// @ts-ignore
const Item = (props) => (
    <Paper>
        <Image src={props.item.image} height={1200} width={2000}  layout='responsive' />
    </Paper>
);

export default Carousels