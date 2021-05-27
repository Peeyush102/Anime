import React from "react";
import { animeNames } from "../../redux";
import { connect } from "react-redux";

function ShowNames(props) {
  return (
    <div>
      <div>{JSON.stringify(props.names)}</div>
      <button onClick={props.fetchNames}> click </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    names: state.names,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNames: () => dispatch(animeNames()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowNames);
