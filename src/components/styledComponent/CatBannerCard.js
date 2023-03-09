import {ImageListItem, ImageListItemBar, styled } from '@mui/material';

const CatBannerCard = ({ item,responsive }) => {

        const BannerImage = styled('img')(() => ({
            width: '100%',
            height:'100%',
            objectFit: 'contain',
        }))

        return (
    
            <ImageListItem sx={{ width: responsive.desk ? '20%' : '45%',
            p: 1,
            boxShadow:
              '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
            borderRadius: '4px',
            transition: 'all 0.3s ease-out', // add transition property
            '&:hover': { // add hover styles
              transform: 'translate3d(0, -1%, 0)',
              cursor: 'pointer',
            },
            }}>
                <BannerImage src={item.image} alt={item.title} />
                <ImageListItemBar title={item.title}
                    sx={{
                        position: 'relative',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        bottom: '50%',
                        background: 'rgba(80, 80, 80, 0.4)',
                        '&>.MuiImageListItemBar-titleWrap': {
                            fontWeight: 'bolder',
                            fontFamily: 'Miller Bold',
                            padding: 0,
                            color: '#F8F8FF',
                            fontSize: (responsive.desk) ? '2rem' : '6vw',

                        },
                        '&>.MuiImageListItemBar-title': {
                            lineHeight: 'none',
                        }
                    }} />
            </ImageListItem>
        )
    }

    export default CatBannerCard