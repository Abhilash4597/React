import PropTypes from 'prop-types';
import './card-list.styles.css';

export const CardList = props => {
  //# Add a check for props.monsters before mapping
  if (!props.monster) {
    return <div>No monsters to display</div>;
  }

  return (
    <div className="card-list">
      {props.monster.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
};


CardList.propTypes = {
  monster: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
