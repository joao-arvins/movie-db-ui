import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, CardMedia, CardHeader,Card, Avatar } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';
import PropTypes from 'prop-types';

const styles = theme => ({
    card: {
        width: 225,
        margin: 10
    },
    media: {
        height: 0,
        paddingTop: 340
    },
    voteAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: blue[500],
        margin: '0 auto'
    },
});

class MovieItem extends Component {
    render() {
        const { classes, movie } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        title={movie.title}
                        subheader={movie.release_date} 
                    />
                    <CardMedia
                        className={classes.media}
                        image={movie.poster_path}
                    />
                    <CardContent>
                        <Avatar className={classes.voteAvatar}>{movie.vote_average}</Avatar>
                    </CardContent>
                </Card>
            </div>
        );
      }
}

MovieItem.defaultProps = {
    id: 0,
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: 0,
    classes: null,
};

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
};
  
export default withStyles(styles)(MovieItem);