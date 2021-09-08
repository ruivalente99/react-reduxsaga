import { call, put, takeEvery } from "redux-saga/effects";

// const apiUrl = `https://jsonplaceholder.typicode.com/issues`;
function getApi() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic cnVpLnZhbGVudGU5OUBnbWFpbC5jb206dVhib2JYd0gxcVBDa0Zkbm92OU85N0JC"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "atlassian.xsrf.token=4fce81a8-c030-47ae-b379-cebcc21e6620_551318602a79540a0cdc428dab41525ba5b833fc_lin"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://ruivalente.atlassian.net/rest/api/latest/search",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
function pushApi(){

  console.log('PUSH');
  /*
  
      Send data back to the api to edit or create a new issue
  
  */
}
function* fetchIssues(action) {
  try {
    const issues = yield call(getApi);
    console.log(issues);
    yield put({ type: "GET_ISSUES_SUCCESS", issues: issues });
  } catch (e) {
    yield put({ type: "GET_ISSUES_FAILED", message: e.message });
  }
}
function* pushIssues(action){
  try {
    const issues = yield call(pushApi);
    console.log(issues);
    yield put({ type: "POST_ISSUES_SUCCESS", issues: issues });
  } catch (e) {
    yield put({ type: "POST_ISSUES_FAILED", message: e.message });
  }
}

function* issueSaga() {
  yield takeEvery("GET_ISSUES_REQUESTED", fetchIssues);
}

export default issueSaga;
