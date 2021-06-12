import swal from "sweetalert2";

interface alertProps {
  title?: string;
  text?: string;
  options: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAlerts(): Record<string, any> {
  const successAlert = async ({ title, text, options }: alertProps) => {
    await swal.fire({
      title: title || "Success",
      icon: "success",
      text: text || "Success action!",
      iconColor: "#fca311",
      customClass: {
        confirmButton: "btn btn-primary",
      },
      buttonsStyling: false,
      ...options,
    });
  };

  const alertFailure = async ({ title, text, options }: alertProps) => {
    await swal.fire({
      title: title || "Failure",
      icon: "error",
      text: text || "Failed Action",
      iconColor: "#14213d",
      customClass: {
        confirmButton: "btn btn-secondary",
      },
      buttonsStyling: false,
      ...options,
    });
  };

  return { successAlert, alertFailure };
}

export default useAlerts;
