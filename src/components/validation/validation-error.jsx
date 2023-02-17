import { Alert } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((error, idx) => {
      return (
        <Alert severity="error" key={idx}>
          {error}
        </Alert>
      );
    })
  );
};

export default ValidationError;
