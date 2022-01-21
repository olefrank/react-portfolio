import SignupFormComponent from "../components/SignupForm";

export default function SignupForm() {
  return (
    <div className="flex flex-col gap-4 w-3/5 mb-4">
      <div>
        <h2 className="text-center">Signup form</h2>
      </div>
      <div>
        <SignupFormComponent />
      </div>
    </div>
  );
}
