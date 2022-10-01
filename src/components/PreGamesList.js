import Stack, { StackProps } from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import MuiIconButton from './MuiIconButton';
import MuiReactSlick from './Slick';

interface GameDividerProps extends StackProps {
    title: string;
    icon: any;
    games: any;
}

const PreGamesList: React.FC<GameDividerProps> = ({
    title,
    icon: Icon,
    games,
    ...rest
}) => {
    return (
        <Stack {...rest} spacing={2}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack direction="row" spacing={1} alignItems="center">
                    <Icon />
                    <Typography>{title}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            bgcolor: '#202a39 !important',
                            color: 'text.secondary',
                            textTransform: 'none',
                            fontSize: 12.5,
                            '&:hover': {
                                color: 'text.primary'
                            }
                        }}
                    >
                        View All
                    </Button>
                    <MuiIconButton size="small">
                        <NavigateBeforeRoundedIcon fontSize="small" />
                    </MuiIconButton>
                    <MuiIconButton size="small">
                        <NavigateNextRoundedIcon fontSize="small" />
                    </MuiIconButton>
                </Stack>
            </Stack>
            <MuiReactSlick
                options={{
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    autoplay: true
                }}
            >
                {games.map((item: any, idx: number) => (
                    <Card
                        key={idx}
                        sx={{
                            height: 300,
                            position: 'relative',
                            '&:hover': {
                                '& > div': {
                                    opacity: 1
                                },
                                '& > img': {
                                    transform: 'scale(1.1)'
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={item.img}
                            alt={item.name}
                            sx={{
                                height: '100%',
                                transition: '.5s'
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                opacity: 0,
                                cursor: 'pointer',
                                bgcolor: 'rgba(27,34,51,.8)',
                                backdropFilter: 'blur(3px)',
                                display: 'flex',
                                transition: '.5s',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    maxWidth: '80%',
                                    margin: '0px auto',
                                    textAlign: 'center',
                                    color: 'common.white'
                                }}
                            >
                                {item.name}
                            </Typography>
                            <IconButton
                                sx={{
                                    bgcolor: 'primary.main',
                                    width: (theme) => theme.spacing(10),
                                    height: (theme) => theme.spacing(10)
                                }}
                            >
                                <PlayArrowRoundedIcon fontSize="large" />
                            </IconButton>
                            <Typography>{item.provider}</Typography>
                        </Box>
                    </Card>
                ))}
                {games.length && (
                    <Card
                        sx={{
                            height: 300,
                            position: 'relative',
                            bgcolor: (theme) =>
                                `${theme.palette.primary.main}55`,
                            cursor: 'pointer',
                            '&:hover': {
                                '& > img': {
                                    transform: 'scale(1.1)'
                                }
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            src="https://betfury.io/_nuxt/img/view-all.0366029.png"
                            alt="view all"
                            sx={{
                                height: '100%',
                                transition: '.5s'
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    margin: 'auto',
                                    textAlign: 'center',
                                    color: 'common.white'
                                }}
                            >
                                View All
                            </Typography>
                        </Box>
                    </Card>
                )}
            </MuiReactSlick>
        </Stack>
    );
};

export default PreGamesList;
