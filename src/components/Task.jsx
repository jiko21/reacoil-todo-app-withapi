import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { useCallback, useEffect } from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {taskState} from '../atoms/Task';

const Task = () => {
  const setTasks = useSetRecoilState(taskState);
  const taskList = useRecoilValue(taskState);
  const getTasks = useCallback(async () => {
    const response = await fetch('http://localhost:4000/tasks', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const rslt = await response.json();
    setTasks(rslt);
  });

  useEffect(() => {
    getTasks()
  }, [getTasks, setTasks]);

  const submitTask = async (task) => {
    await fetch('http://localhost:4000/tasks', {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(task),
    });
    getTasks();
  }
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <TaskInput submitTask={submitTask} />
          <TaskList taskList={taskList}/>
        </Col>
      </Row>
    </Container>
  )
};

export default Task;
