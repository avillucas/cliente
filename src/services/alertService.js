import Swal from "sweetalert2";

const showAlert = async (title, message, icon) => {
  const result = await Swal.fire({
    title,
    html: message,
    icon,
    confirmButtonText: "Aceptar",
    allowOutsideClick: false,
  });
  return {
    value: result.value,
    dismiss: result.dismiss ? result.dismiss : undefined,
  };
};

export const AlertService = {
  showSuccess: (message) => showAlert("Éxito", message, "success"),

  showError: (apiErrorResponse = null, title = "Error") => {
    const errorMessages = (apiErrorResponse ?? []).map((err) =>
      typeof err === "string" ? err : Object.values(err).join(", ")
    );
    return showAlert(
      title,
      errorMessages.map((msg) => `<p>${msg}</p>`).join(""),
      "error"
    );
  },
};
