import SignupFormComponent from "../components/SignupForm";

export default function SignupForm() {
  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-8 flex flex-col items-center justify-start px-4">
        <SignupFormComponent />
      </div>
      <div className="col-span-4 px-4">
        <h1>Signup form</h1>
        <h3>Description</h3>
        <p>Make a form where users can sign up</p>

        <h3>Use cases</h3>
        <ul>
          <li>Validate inputs after being touched</li>
          <li>Show error messages for each field</li>
          <li>All fields are required</li>
          <li>Password fields must match</li>
        </ul>
      </div>
    </div>
  );
}
