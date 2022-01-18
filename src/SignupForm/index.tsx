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
        <p>Make a Signup form that ...</p>

        <h3>Use cases</h3>
        <ul>
          <li>xxx</li>
        </ul>
      </div>
    </div>
  );
}
