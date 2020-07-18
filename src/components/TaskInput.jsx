import React from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import { useState } from 'react';

const TaskInput = ({submitTask}) => {
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeOvewview = (event) => {
    setOverview(event.target.value);
  }

  const onSubmit = async () => {
    await submitTask(
      {
        title,
        overview,
        isFinished: false,
      }
    );
    setTitle('');
    setOverview('');
  };

  return (
    <Card
      bg="Light"
    >
      <Card.Body>
        <Form>
          <Form.Label>Todoを入力</Form.Label>
          <Form.Control type="text" placeholder="todo" value={title} onChange={onChangeTitle} />
          <Form.Control type="text" as="textarea" rows="3" placeholder="overview" value={overview} onChange={onChangeOvewview} />
          <Button onClick={onSubmit}>追加</Button>
        </Form>
      </Card.Body>
    </Card>
  )
};

export default TaskInput;
