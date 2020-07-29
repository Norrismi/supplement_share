import React, { Component } from "react";
import "./SC-Styles.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteSupplement } from "../../Store/Actions/supplementActions";
import moment from "moment";

class SupplementCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render(props) {
    const { supplement } = this.props;
    return (
      <div className="card mb-2 sc-card-container hoverable">
        <h5 className="card-title user-card-title card-header">
          {" "}
          {supplement.supplementName}
        </h5>
        <div className="card-body">
          <div className="col-md-12">
            <p className="card-text">
              <strong>Benefit: </strong>
              {supplement.benefit}
            </p>
            <p className="card-text truncate">
              <strong>Description: </strong>
              {supplement.description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                {moment(supplement.createdDate).format("LL")}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteSupplement: (id) => {
      dispatch(deleteSupplement(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    id: state.firestore.data.supplements,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "supplements" }])
)(SupplementCard);

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import ShareIcon from '@material-ui/icons/Share';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import moment from 'moment'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     marginTop: 10
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

//  function SupplementCard({supplement}) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }

//         title={supplement.supplementName}
//         subheader={moment(supplement.createdDate).format('LL')}
//       />

//       <CardContent>
//       <Typography paragraph>Benefit:</Typography>
//           <Typography paragraph>
//           {supplement.benefit}
//           </Typography>
//         <br/>
//         <Typography paragraph>Description:</Typography>
//           <Typography paragraph>
//           {supplement.description}
//           </Typography>
//       </CardContent>

//       <CardActions >
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton aria-label="edit">
//           <EditIcon/>
//         </IconButton>
//         <IconButton aria-label="delete">
//        <DeleteIcon/>
//         </IconButton>

//       </CardActions>

//     </Card>
//   );
// }

// export default SupplementCard
