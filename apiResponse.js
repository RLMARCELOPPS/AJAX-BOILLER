function errorResponse(errorType = null) {
  if (errorType == "funcNotFound") {
    Swal.fire({
      title: "Error!",
      text: "Function not found!",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 400) {
    Swal.fire({
      title: "Error!",
      text: "Bad Request! The server could not understand the request.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 401) {
    Swal.fire({
      title: "Error!",
      text: "Unauthorized! You need to log in to perform this action.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 403) {
    Swal.fire({
      title: "Error!",
      text: "Forbidden! You don't have permission to access this resource.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 404) {
    Swal.fire({
      title: "Error!",
      text: "Not Found! The requested resource could not be found.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 409) {
    Swal.fire({
      title: "Error!",
      text: "Conflict! The request could not be completed due to a conflict with the current state of the resource.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 500) {
    Swal.fire({
      title: "Error!",
      text: "Internal Server Error! Something went wrong on the server.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 502) {
    Swal.fire({
      title: "Error!",
      text: "Bad Gateway! The server received an invalid response from the upstream server.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 503) {
    Swal.fire({
      title: "Error!",
      text: "Service Unavailable! The server is currently unable to handle the request.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else if (errorType == 504) {
    Swal.fire({
      title: "Error!",
      text: "Gateway Timeout! The server did not receive a timely response from the upstream server.",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "An unexpected error occurred! Please try again later.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

// Success Response
function successResponse(successType = null) {
  if (successType == 200) {
    Swal.fire({
      title: "Success!",
      text: "Request completed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else if (successType == 201) {
    Swal.fire({
      title: "Created!",
      text: "The record was created successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else if (successType == "postSuccess") {
    Swal.fire({
      title: "Success!",
      text: "Your post was created successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else if (successType == "updateSuccess") {
    Swal.fire({
      title: "Success!",
      text: "The record was updated successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else if (successType == "deleteSuccess") {
    Swal.fire({
      title: "Deleted!",
      text: "The record was deleted successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Action completed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
}
// function ajaxRequest(method, url, data, successCallback, errorCallback) {
//   $.ajax({
//     method: method,
//     url: url,
//     data: JSON.stringify(data),
//     contentType: "application/json; charset=utf-8",
//     success: successCallback,
//     error: errorCallback,
//   });
// }
