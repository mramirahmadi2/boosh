import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const CardBook = ({ books }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
          
            {/* #E1F7E1 */}
            <Card
              sx={{ maxWidth: 345, mt: "30px", backgroundColor: "#F6FAF3" ,borderRadius: '20px'}}
            >
              <CardActionArea component={Link} to={`/DetailsBook/${book.id}`}>
              {typeof book.image === 'string' && (  <CardMedia
                  component="img"
                  height="250"
                  
                  image={`http://localhost:3002/files/${book.image.replace(
                    "/files/",
                    ""
                  )}`}
                  alt={book.title}
                  sx={{width:"80%",marginRight:"10%",marginBottom:"5%",marginTop:"5%"}}
                />)}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography color="text.secondary">{book.writer}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardBook;
