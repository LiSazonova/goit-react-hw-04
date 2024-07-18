import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <div className={s.load__wrapper}>
    <button className={s.load__btn} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
