import PopupStyle from '../Popup/popupStyle';

const Popup = ({ complete, product, openPopup }) => (
  <PopupStyle>
    <div className="content">
      <button className="close" onClick={() => openPopup()}>
        <i className="fa fa-times-circle-o" aria-hidden="true"></i>
      </button>
      <div className="text">
        Are you sure you want to mark this product as complete?
      </div>
      <div className="action-wrap">
        <button className="cancle" onClick={() => openPopup()}>
          Cancel
        </button>
        <button className="confirm" onClick={() => complete(product)}>
          Confirm
        </button>
      </div>
    </div>
  </PopupStyle>
);

export default Popup;
