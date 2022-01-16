export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-8 divide-x">
      <div className="flex flex-col justify-start">
        <h1 className="text-center">Oles ReactJS Portfolio</h1>
        <p>
          This is a show case of relative small and simple tasks that I'm often
          asked by recruiters to do.
        </p>
        <p>Use the top menu to see the different tasks.</p>
      </div>
      <div className="flex flex-col justify-start pl-8">
        <h2 className="m-0">Technologies used</h2>
        <ul className="list-none p-0 flex gap-8 items-center">
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
        </ul>
      </div>
    </div>
  );
}
