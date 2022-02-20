import {Box} from "@mui/material";
import path from "path";
import fs from "fs";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

const Product = (props : any) => {
    console.log(props)
    return(
        <Box>
            <Box  sx={{minHeight: 800}}>
                <Navbar/>
            </Box>

            <Box>
                <Footer />
            </Box>

        </Box>
    )
}

export async function getStaticProps(context : any) {

    const {params} = context

    console.log(params)
    return {
        props: {
            data : "hello"
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {

    const data = await getData()

    const ids = data.products.map((prod : any)=> ({params : { id : prod.id.toString()}}))

    console.log(ids)

    return {
        paths: ids,
        fallback: true // false or 'blocking'
    };
}

const getData = async () => {
    const filePath: any = path.join(process.cwd(), 'data', 'data.json')
    const data = await fs.readFileSync(filePath)
    const parsedata = JSON.parse(data as unknown as string)
    return parsedata
}
export default Product