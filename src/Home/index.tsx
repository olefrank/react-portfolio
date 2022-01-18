export default function Home() {
  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-8 flex flex-col justify-start px-4">
        <h1 className="text-center">Oles ReactJS Portfolio</h1>
        <p>
          This is a show case of relative small and simple tasks that I'm often
          asked by recruiters to do.
        </p>
        <p>Use the top menu to see the different tasks.</p>
      </div>
      <div className="col-span-4 px-4">
        <h2 className="mt-0">Technologies used</h2>
        <ul className="list-none p-0 flex gap-8 items-center flex-wrap">
          <li className="h-24 w-24 transition ease-in-out duration-150 hover:bg-slate-100">
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.232 23 20.463"
              >
                <circle r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </a>
          </li>
          <li className="h-24 w-24 transition ease-in-out duration-150 hover:bg-slate-100">
            <a
              href="https://www.typescriptlang.org/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path fill="#007ACC" d="M0 128v128h256V0H0z" />
                <path
                  d="m56.611 128.85-.081 10.483h33.32v94.68H113.42v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.399-.244-44.983-.203l-44.739.122-.122 10.443ZM206.567 118.108c6.501 1.626 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.08.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.52-3.291-4.794-6.745-6.867-12.028-7.232-7.76-.529-12.759 3.535-12.718 10.32 0 1.992.284 3.17 1.097 4.796 1.707 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.25 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.88-28.323 20.277-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.13 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.243-17.595-10.24-13.206-5.69-18.895-9.225-24.096-14.833-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.57Z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </li>
          <li className="h-24 w-24 transition ease-in-out duration-150 hover:bg-slate-100">
            <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
              <svg
                viewBox="0 0 1000 1000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M489.5 226.499c-161.5 5.133-209.5 120.5-220.5 183 14.333-23.167 59.5-73.999 126-73.999 77.5 0 136.5 86.5 172.5 113.5 43.737 32.803 131.623 76.115 247 41 92-28 134.667-125.668 144-172.001-44.5 60.5-112 96.839-195.5 54-57.5-29.5-100.5-150.999-273.5-145.5ZM261 500.999c-161.5 5.133-209.5 120.5-220.5 183C54.833 660.832 100 610 166.5 610 244 610 303 696.5 339 723.5c43.737 32.803 131.623 76.115 247 41 92-28 134.667-125.668 144-172.001-44.5 60.5-112 96.839-195.5 54C477 616.999 434 495.5 261 500.999Z"
                  fill="#07B6D5"
                />
              </svg>
            </a>
          </li>
          <li className="h-24 w-24 transition ease-in-out duration-150 hover:bg-slate-100">
            <a href="https://jestjs.io/" rel="noreferrer" target="_blank">
              <svg
                viewBox="0 0 256 283"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M239.973 139.203c0-14.534-11.782-26.316-26.316-26.316-.935 0-1.857.05-2.766.145L247.036 6.427H93.432l36.094 106.513a26.437 26.437 0 0 0-1.6-.053c-14.533 0-26.315 11.782-26.315 26.316 0 11.748 7.699 21.694 18.326 25.078-5.613 9.722-12.675 18.478-20.693 26.042-10.903 10.286-23.381 18.085-36.876 22.891-16.068-8.254-23.656-26.612-16.81-42.707.774-1.817 1.563-3.66 2.318-5.494 11.64-2.717 20.314-13.153 20.314-25.621 0-14.534-11.782-26.316-26.316-26.316-14.535 0-26.317 11.782-26.317 26.316 0 8.913 4.435 16.784 11.213 21.545-6.514 14.831-16.088 30.351-19.071 48.339-3.575 21.559-.011 44.443 18.634 57.366 43.424 30.096 90.56-18.657 140.259-30.913 18.01-4.442 37.782-3.726 53.65-12.917 11.918-6.902 19.774-18.34 22.004-31.182 2.202-12.686-1.01-25.317-8.393-35.559a26.207 26.207 0 0 0 6.12-16.868Zm-85.732.093.003-.093c0-9.544-5.082-17.902-12.686-22.515l28.728-58.091 28.778 58.707c-7.067 4.718-11.724 12.764-11.724 21.899 0 .192.01.381.015.572l-33.114-.479Z"
                  fill="#C63D14"
                />
                <path
                  d="M246.399 139.203c0-15.985-11.517-29.323-26.688-32.172L256 0H84.466l36.344 107.248c-14.643 3.259-25.627 16.345-25.627 31.955 0 11.723 6.195 22.02 15.48 27.806-4.466 6.653-9.762 12.914-15.831 18.639-9.624 9.08-20.347 15.966-31.907 20.496-11.643-7.314-16.565-21.106-11.453-33.122l.4-.94.751-1.768c12.788-4.459 21.993-16.632 21.993-30.922 0-18.055-14.689-32.743-32.744-32.743S9.129 121.337 9.129 139.392c0 9.113 3.745 17.365 9.773 23.307a551.638 551.638 0 0 1-3.423 7.124C9.967 181.144 3.72 193.976 1.357 208.225c-4.693 28.299 2.876 50.921 21.313 63.699 11.188 7.754 22.549 10.804 33.982 10.803 21.529-.001 43.306-10.816 64.606-21.396 15.341-7.619 31.203-15.498 46.872-19.362 5.83-1.438 11.829-2.303 18.18-3.219 12.594-1.817 25.618-3.695 37.154-10.376 13.371-7.745 22.525-20.737 25.113-35.644 2.222-12.797-.453-25.613-6.975-36.483a32.544 32.544 0 0 0 4.797-17.044Zm-12.854 0c0 10.967-8.922 19.89-19.89 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889c10.968 0 19.89 8.922 19.89 19.889Zm4.524-126.349-32.045 94.513a32.348 32.348 0 0 0-4.058 1.258L170.31 44.047l-31.748 64.196a32.34 32.34 0 0 0-4.232-1.15l-31.935-94.239h135.674Zm-110.143 106.46c10.967 0 19.889 8.922 19.889 19.889 0 10.967-8.922 19.89-19.889 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889Zm-86.054.189c10.968 0 19.89 8.922 19.89 19.889 0 10.967-8.922 19.89-19.89 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889Zm194.04 71.028c-1.935 11.148-8.821 20.887-18.891 26.719-9.387 5.437-20.636 7.06-32.546 8.777-6.38.92-12.978 1.872-19.423 3.462-17.042 4.202-33.549 12.401-49.512 20.33-31.945 15.867-59.534 29.569-85.547 11.54-19.055-13.206-18.175-37.641-15.955-51.031 2.057-12.405 7.619-23.83 12.998-34.879a748.863 748.863 0 0 0 2.722-5.646 32.459 32.459 0 0 0 8.462 2.124c-5.475 18.071 3.136 37.719 21.209 47.004l2.473 1.271 2.62-.933c14.288-5.088 27.453-13.254 39.131-24.271 7.549-7.121 14.036-15 19.37-23.419a32.9 32.9 0 0 0 4.903.368c18.055 0 32.744-14.688 32.744-32.744 0-9.71-4.253-18.442-10.989-24.444l20.578-41.612 20.787 42.405c-6.237 5.966-10.134 14.359-10.134 23.651 0 18.056 14.688 32.744 32.743 32.744a32.549 32.549 0 0 0 18.672-5.868c3.68 7.533 5.051 16.009 3.585 24.452Z"
                  fill="#FFF"
                />
              </svg>
            </a>
          </li>
          <li className="h-24 w-24 transition ease-in-out duration-150 hover:bg-slate-100">
            <a href="https://formik.org" rel="noreferrer" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="414"
                fill="none"
                viewBox="0 0 367 84"
              >
                <path
                  fill="#172B4D"
                  d="m38.869 0 9.694 5.575-38.176 21.953-9.694-5.574L38.869 0ZM48.954 6.745 11.018 28.551l-.001 11.032 37.936-21.805V6.745ZM33.699 28.276l-22.601 12.99-.002 11.034 22.601-12.992.002-11.032ZM25.035 45.717l-13.99 8.042-.002 11.033 13.99-8.042.002-11.033ZM.004 23.017l9.75 5.605-.003 11.035L0 34.053l.004-11.036ZM.097 35.657l9.632 5.537-.004 11.035-9.632-5.536.004-11.036ZM.092 48.221l9.636 5.539-.004 11.763-9.636-5.539.004-11.763ZM21.564 84l-9.694-5.575 37.743-21.704 9.694 5.575L21.564 84ZM11.102 77.471l37.879-21.773.001-11.032-37.879 21.773-.001 11.032ZM26.3 55.974l22.601-12.992.001-11.032-22.6 12.99-.002 11.034ZM34.964 38.532l13.99-8.042.002-11.033-13.99 8.042-.002 11.033ZM59.996 61.306l-9.75-5.605.003-11.035L60 50.271l-.004 11.035ZM59.904 48.595l-9.633-5.537.004-11.035 9.633 5.536-.004 11.036ZM59.908 36.03l-9.636-5.538.004-11.552 9.636 5.539-.004 11.552Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
