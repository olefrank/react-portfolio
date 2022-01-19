import SignupFormComponent from "../components/SignupForm";

export default function SignupForm() {
  return (
    <div className="flex flex-col gap-4 w-3/5 mb-4">
      <div>
        <h2 className="text-center">Signup form</h2>
        {/* <h4>Description</h4>
        <p>Make a form where users can sign up</p>
        <h4>Use cases</h4>
        <ul className="text-base">
          <li>Validate inputs after being touched</li>
          <li>Show error messages for each field</li>
          <li>All fields are required</li>
          <li>Password fields must match</li>
        </ul> */}
      </div>
      <div>
        <SignupFormComponent />
      </div>
    </div>
  );
}
