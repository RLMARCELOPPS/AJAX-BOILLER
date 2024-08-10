$(document).ready(function () {
  //CREATE BUTTON
  // Button Click Event Handlers
  $("#btn-create").on("click", handleCreate);
  $("#btn-save").on("click", handleSave);
  $("#btn-edit").on("click", handleEdit);
  $("#btn-update").on("click", handleUpdate);
  $("#btn-delete").on("click", handleDelete);

  // Function to handle the "Create" action
  function handleCreate() {
    alert("Open form");
  }

  // Function to handle the "Save" action
  function handleSave() {
    if (typeof store === "function") {
      store(`https://jsonplaceholder.typicode.com/users`);
    } else {
      errorResponse("funcNotFound");
    }
  }

  // Function to handle the "Edit" action
  function handleEdit() {
    if (typeof edit === "function") {
      alert("Open form");
      edit(`https://jsonplaceholder.typicode.com/users/1`);
    } else {
      errorResponse("funcNotFound");
    }
  }

  // Function to handle the "Update" action
  function handleUpdate() {
    if (typeof update === "function") {
      update();
    } else {
      errorResponse("funcNotFound");
    }
  }

  // Function to handle the "Delete" action
  function handleDelete() {
    if (typeof destroy === "function") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          destroy();
        }
      });
    } else {
      errorResponse("funcNotFound");
    }
  }
});
