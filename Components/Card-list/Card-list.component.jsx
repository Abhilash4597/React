import PropTypes from 'prop-types';
import './card-list.styles.css';

export const CardList = props => {
  return <div className="card-list">{props.children}</div>;
};

CardList.propTypes = {
  children: PropTypes.node.isRequired, // Use PropTypes.node for the children prop
};
