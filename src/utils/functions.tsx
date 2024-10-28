import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function moveWhitKeyBottom(route: string) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 40) {
        navigate(route);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, route]);
}

function moveWhitKeyTop(route: string) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 38) {
        navigate(route);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, route]);
}

export { moveWhitKeyBottom, moveWhitKeyTop };
