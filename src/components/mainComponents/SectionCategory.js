import { Box, Card, CardActionArea, CardMedia,CardContent, Typography } from '@mui/material'
import imgRebajas from '../../img/desktop-rebajas.webp'

const SectionCategory = ({ responsive }) => {
    return (
        <Box>
            <Card sx={{background:'inherit', padding: '24px'}}>
                <CardActionArea sx={{display:'flex', flexDirection: responsive.desk ? 'row': 'column'}}>
                    <CardContent sx={{ display:'flex', flexDirection:'column', textAlign:'center', width: responsive.desk ? '30%' : '100%'}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{textTransform:'uppercase',textAlign:'center'}}>
                            rebajas
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Descubre la amplia seleccion
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imgRebajas}
                        alt="rebajas"
                        sx={{height: '100%',
                        objectFit: 'cover',
                        width: responsive.desk ? '70%':'100%'}}
                    />
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default SectionCategory