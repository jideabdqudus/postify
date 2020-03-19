import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";
import AvatarBackground from '../../images/AvatarBackground';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Todos = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <AvatarBackground/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Todos;





// const Todos = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(false);

  
//   useEffect(() => {
//     getTodos();
//     //eslint-disable-next-line
//   },[]);

//   const getTodos = async () => {
//     setLoading(true);
//     const res = await fetch("/todos");
//     const data = await res.json();

//     setTodos(data);
//     setLoading(false);
//   };

//   if (loading) {
//    return <Preloader/>;
//   }

//   return (
//           <ul className="collection with-header">
//             <li className="collection-header">
//               <h4 className="center">Posts</h4>
//             </li>
//               {!loading && todos.length === 0 ? (
//                 <p className="center">No posts</p>
//               ) : (
//                 todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)
//               )}
//           </ul>
//   );
// }
