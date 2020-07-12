import React from 'react';
import {Button,Card,ListGroup} from 'react-bootstrap';

const TaskList = ({taskList}) => {
  return (
    <ListGroup>
      {taskList.map((task) => {
        return (
          <Card key={task.id}>
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>
              {task.overview}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        );
      })}
    </ListGroup>
  )
}

export default TaskList
