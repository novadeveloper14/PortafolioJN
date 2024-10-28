import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main>
      {isLoading && (
        <div className="triangles" id="loading">
          <div className="tri invert"></div>
          <div className="tri invert"></div>
          <div className="tri"></div>
          <div className="tri invert"></div>
          <div className="tri invert"></div>
          <div className="tri"></div>
          <div className="tri invert"></div>
          <div className="tri"></div>
          <div className="tri invert"></div>
        </div>
      )}
    </main>
  );
};

export { Loading };
