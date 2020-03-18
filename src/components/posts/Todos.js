import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    setLoading(true);
    const res = await fetch("/todos");
    const data = await res.json();

    setTodos(data);
    setLoading(false);
  };

  if (loading) {
   return <h4>Loading...</h4>;
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Posts
        </Typography>
        <Typography variant="h5" component="h2">
          My{bull}Posts
        </Typography>
        <Typography variant="body2" component="p">
          <ul>
            <li>
              {!loading && todos.length === 0 ? (
                <p>No logs</p>
              ) : (
                todos.map((todo) => <li>{todo.message}</li>)
              )}
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Todos;
