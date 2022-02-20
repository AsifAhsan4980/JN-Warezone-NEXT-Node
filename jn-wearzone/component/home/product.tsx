import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import {Box, Container, Grid} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";
import Image from "next/image";
import datas from "../../data/data.json"
// import fs from "fs";
import path from "path";
import * as fs from "fs";
import Badge from "@mui/material/Badge";
import {BsCartCheck} from "react-icons/bs";
import {isAuthenticated} from "../../utils/auth";
import Link from 'next/link'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const Product = (props : any) => {

   const products : any[] = props.parsedata.products

    console.log(products)

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function addToCart() {
        console.log('added')
        if(isAuthenticated()){

        }
        else{

        }
    }

    return(
        <Container>
            <Typography sx={{fontSize: 20, fontWeight: "bold", textAlign: 'center' }}>Products</Typography>
            <Grid container spacing={2}>
                {products && products?.map((data : any)=>
                    (
                        <Grid key={data.id} item>
                            <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                                <Link href={`/products/${data.id}`}>
                                    <Box>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ backgroundColor: red[500] }} aria-label="recipe">
                                                    {data.name}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={data.name}
                                            subheader={data.date}
                                        />
                                        <Image
                                            src="/peakpx.jpg"
                                            alt="Paella dish"
                                            width="1000"
                                            height='700'
                                            layout='responsive'

                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                    </Box>

                                </Link>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <Badge badgeContent={data.like} color="primary">
                                            <FavoriteIcon />
                                        </Badge>

                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton sx={{float: 'right'}}>
                                        <BsCartCheck title="Add to cart" style={{color: "black"}} onClick={e=> addToCart()} />

                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                )}

            </Grid>


        </Container>

    )
}


export default Product