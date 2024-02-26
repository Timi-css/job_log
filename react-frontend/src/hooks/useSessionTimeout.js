import { React, useEffect } from "react";

const useSessionTimeout = (timeoutMs) => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginTime = localStorage.getItem("loginTime");

    if (isLoggedIn && loginTime) {
      const timeElapsed = Date.now() - parseInt(loginTime);
      if (timeElapsed >= timeoutMs) {
        localStorage.clear();
        window.location.reload();
      } else {
        localStorage.setItem("loginTime", Date.now());
      }
    }
  }, [timeoutMs]);
};

export default useSessionTimeout;
