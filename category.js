function store() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "POST",
    data: JSON.stringify({
      name: "Redemple",
      email: "Redemple@gmail.com",
    }),
    contentType: "application/json; charset=utf-8",
    success: function () {
      successResponse(201);
    },
    error: function (error) {
      errorResponse(error.status);
    },
  });
}

function edit() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function () {
      alert("Edit");
    },
    error: function () {
      errorResponse(error.status);
    },
  });
}

function update() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "PUT",
    data: JSON.stringify({
      name: $("#name").val(),
      email: $("#email").val(),
    }),
    contentType: "application/json; charset=utf-8",
    success: function () {
      successResponse("updateSuccess");
    },
    error: function (error) {
      errorResponse(error.status);
    },
  });
}

function destroy() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "DELETE",
    success: function () {
      successResponse("deleteSuccess");
    },
    error: function (error) {
      errorResponse(error.status);
    },
  });
}
