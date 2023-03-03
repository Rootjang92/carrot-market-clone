import { useState } from "react";

import Button from "components/Button";

const Auth = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  const onEmailClick = () => setLoginMethod("email");

  const onPhoneClick = () => setLoginMethod("phone");

  return (
    <div>
      <Button
        classNames={[
          "pb-4 font-medium",
          loginMethod === "email" ? "border-b-2 border-orange-500 text-orange" : "",
        ]}
        onClick={onEmailClick}
      >
        Email address
      </Button>
    </div>
  );
};

export default Auth;
