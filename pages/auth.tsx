import { useState } from "react";

import Button from "components/Button";

const Auth = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  const onEmailClick = () => setLoginMethod("email");

  const onPhoneClick = () => setLoginMethod("phone");

  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl font-bold">Welcome, Carrot Market</h3>
      <div className="mt-16">
        <div className="flex flex-col items-center">
          <h5 className="text=sm text-gray-500">Login</h5>
          <div className="mt-8 grid w-full grid-cols-2 gap-16 border-b pb-4">
            <Button
              classNames={[
                "pb-4 font-medium",
                loginMethod === "email" ? "border-b-2 border-orange-500 text-orange" : "",
              ]}
              onClick={onEmailClick}
            >
              Email address
            </Button>
            <Button
              classNames={[
                "pb-4 font-medium",
                loginMethod === "phone" ? "border-b-2 border-orange-500 text-orange" : "",
              ]}
              onClick={onPhoneClick}
            >
              Phone number
            </Button>
          </div>
        </div>
        <form>
          <label>
            {loginMethod === "email" ? "Email address" : null}
            {loginMethod === "phone" ? "Phone Number" : null}
          </label>
        </form>
      </div>
    </div>
  );
};

export default Auth;
