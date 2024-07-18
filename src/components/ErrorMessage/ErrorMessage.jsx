import s from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div>
    <p className={s.error_message}>{message}</p>
  </div>
);

export default ErrorMessage;
