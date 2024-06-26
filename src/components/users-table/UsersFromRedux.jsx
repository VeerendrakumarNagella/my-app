import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { getUsers } from "../../redux/actions/usersDataAction";
import Loader from "../common/Loader";

const UsersFromRedux = () => {
  const dispatch = useDispatch();
  const { loading, users, errorMessage } = useSelector(
    (state) => state.usersDataReducer
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   props.getUsers();
  // }, []);

  // const { loading, users, errorMessage } = props;

  if (errorMessage) return <div>{errorMessage}</div>;

  if (loading) return <Loader />;

  return (
    <div>
      <table className="usersTable">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address?.city}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     loading: state.usersDataReducer.loading,
//     users: state.usersDataReducer.users,
//     errorMessage: state.usersDataReducer.errorMessage,
//   };
// };

// const mapDispatchToProps = {
//   getUsers,
// };

export default UsersFromRedux;

// export default connect(mapStateToProps, { getUsers })(UsersFromRedux); // without mapDispatchToProps
// export default connect(mapStateToProps, mapDispatchToProps)(UsersFromRedux);
