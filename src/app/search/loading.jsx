import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="Loading">
        <CircularProgress color="success" />
      <h2>Loading...</h2>
    </div>
  );
}
