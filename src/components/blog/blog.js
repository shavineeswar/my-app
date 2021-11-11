import React , { useEffect, useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cover-photo%2Cbackground%2C-technology-design-template-d7e7283570838b88ee81709a320e562a_screen.jpg?ts=1597391993')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));


function Blog() {
  const classes = useStyles();

  const [Blog, setBlog] = useState("");

  function navigateSubjectPage(e, blogId) {
    window.location = `/blog/${blogId}`
  }
  

  useEffect(() => {
   
    axios.get('http://localhost:8089/blog/getall')
    .then(response =>{
      console.log('ALL Blog',response.data)
     setBlog(response.data.data)
    })

    }, [])


  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
        {Blog.length > 0 && Blog.map((item,index) =>(
          <Grid item xs={12} sm={6} md={4}>
            <Card  key={index} className={classes.card} onClick={e => navigateSubjectPage(e, item._id)}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.PhotoLink}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.Title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   {item.Subject}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar  />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      {item.Writer}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      {item.Dateofpost}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
             
          </Grid>
            ))}
        </Grid>
        
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Blog;