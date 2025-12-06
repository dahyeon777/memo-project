import './index.css';

function MemoItem({ children, onClick, onClickDelete, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClick}
    >
      {children}
      <button className="MemoItem_delete-button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;
