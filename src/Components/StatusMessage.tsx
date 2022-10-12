import { FaCheck } from 'react-icons/fa';
import { SuccessBox } from '../Styles/StatusMessage';
import { Status } from "../Types/Status"

interface StatusMessageProps {
  status: Status;
  message: string;
}

export default function StatusMessage({ status, message }: StatusMessageProps) {
  if (status === Status.Success) {
    return (
      <>
        <SuccessBox>{message} <FaCheck /></SuccessBox>
      </>
    );
  } else {
    return null;
  }
}