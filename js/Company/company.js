var dataTable;
$(document).ready(function () {
    debugger;
    loadDataTable();
});

function loadDataTable() {
    debugger;
    dataTable = $('#companyTable').DataTable({
        "ajax": {
            "url":"/Admin/Company/GetAll"
        },
        bVisible: false,
        "columns": [
            {"data": "name", "width":"15%"},
            { "data": "streetAddress", "width":"15%"},
            { "data": "city", "width":"15%"},
            { "data": "state", "width":"15%"},
            { "data": "phoneNumber", "width":"15%"},
            //{ "data": "postalCode", "width":"15%"},
            {
                "data": "id",
                "render": function (data) {
                    return '<div class="w-75 btn-group" role = "group">'
                        + '<a href="/Admin/Product/Upsert?Id=' + data + '" class="btn btn-primary mx-2" > <i class="bi bi-pencil-square"></i> Edit</a >' +
                        '<a onClick="Delete(' + data + ')" class="btn btn-danger mx-2"> <i class="bi bi-trash-fill"></i> Delete</a></div > '
                }
            },
            
        ]

    });
}

function Delete(id) {
    debugger;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/Admin/Company/Delete/" + id,
                type: 'DELETE',
                success: function (data)
                {
                    if (data.success) {
                        dataTable.ajax.reload();
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    })
}