import CardStyle from './cardStyle';
import Chart from '../Chart';
import { percentage, warehouse_coverage, coverage_class } from '../../util';

const Card = ({ product, openPopup }) => (
  <CardStyle>
    <div className="overlay">
      <button onClick={() => openPopup(product)}>Mark Complete</button>
    </div>
    <div
      className="img"
      style={{ backgroundImage: `url(/images/${product.code}.jpg)` }}
    >
      <span>{product.sales_ranking}</span>
    </div>
    <div className="wrap">
      <div className="code">{product.code}</div>
      <div className="name">{product.name}</div>
      <div className="price">{product.price}€</div>
      <Chart product={product.size_stock} />
      <div className="stockout">
        <div className="percentage">
          <span className="count">{percentage(product.wh_coverage)}</span>
          <span className="percent">%</span>
          <span className="label">Stockout</span>
        </div>
        <div className="bar-wrap">
          <div
            className="bar"
            style={{ width: `${percentage(product.wh_coverage)}%` }}
          ></div>
        </div>
      </div>
      <div className="coverage">
        <div
          className={`title ${coverage_class(
            percentage(product.wh_coverage)
          )} `}
        >
          {warehouse_coverage(percentage(product.wh_coverage))}
        </div>
        <div className="caption">WH COVERAGE</div>
      </div>
    </div>
  </CardStyle>
);

export default Card;
