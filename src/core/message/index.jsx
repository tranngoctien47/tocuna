import Swal from "sweetalert2"

export const SuccessMessage = (title) => {
    Swal.fire({
        title: title,
        icon: 'success',
        timer: 1500
    })
}
export const ErrorMessage = (title) => {

    Swal.fire({
        title: title,
        icon: 'error',
        timer: 1500
    })
}