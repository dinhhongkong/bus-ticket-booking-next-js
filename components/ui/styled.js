import { Button, DatePicker, Form, Input, Modal, Tag, TimePicker } from 'antd';
import styled from 'styled-components';

export const StyledAddTaskModal = styled(Modal)`
  position: relative;
  min-width: 650px;
  margin: auto;

  & .ant-modal-body {
    padding: 0;
  }
`;

export const StyledAddTaskForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .form-field {
    margin-bottom: 20px;
  }

  & textarea.ant-input {
    height: 170px;
  }
`;

export const StyledAddTaskFormDate = styled(DatePicker)`
  width: 100%;
`;

export const StyledAddTaskFormTimePicker = styled(TimePicker)`
  width: 100%;
`;

export const StyledAddTaskInput = styled(Input)`
  width: 100%;
`;

export const StyledAddTaskTag = styled(Tag)`
  display: flex;
  align-items: center;
  height: 32px;
  cursor: pointer;
`;

export const StyledAddTaskModalFooter = styled.div`
  padding: 8px 10px 0px 10px;
  text-align: right;

  [dir='rtl'] & {
    text-align: left;
  }
`;

export const StyledAddTaskModelBtn = styled(Button)`
  padding-left: 32px;
  padding-right: 32px;
`;
