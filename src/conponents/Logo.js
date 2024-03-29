import React from "react";

function Logo(props) {
  return (
    <svg
      className={props.className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 400 400'
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M333.876 264.55C373.624 188.61 400 93.232 400 35.72c0-57.272-26.157-35.906-65.627-3.665-34.287 28.008-78.621 64.222-124.583 64.222-44.456 0-91.349-33.881-129.498-61.445C33.597 1.094 0-23.181 0 35.72 0 92.615 31.347 186.569 75.567 262.1l75.482 59.752h102.098l80.729-57.302zm-187.023 7.342c33.214 0 60.14-29.145 60.14-65.098s-26.926-65.099-60.14-65.099-60.14 29.146-60.14 65.099 26.926 65.098 60.14 65.098zm165.035-65.098c0 26.755-20.038 48.445-44.755 48.445-24.718 0-44.755-21.69-44.755-48.445 0-26.756 20.037-48.446 44.755-48.446 24.717 0 44.755 21.69 44.755 48.446zM208.392 290.06c0 7.525-5.636 13.625-12.588 13.625-6.952 0-12.587-6.1-12.587-13.625 0-7.526 5.635-13.626 12.587-13.626s12.588 6.1 12.588 13.626zm15.384 9.083c4.635 0 8.392-4.067 8.392-9.083 0-5.017-3.757-9.084-8.392-9.084-4.634 0-8.391 4.067-8.391 9.084 0 5.016 3.757 9.083 8.391 9.083z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#fff'
        d='M334.266 272.691c-.768 28.35-42.677 74.355-63.827 93.748-21.15 19.394-50.962 30.028-80.105 29.103-29.142-.925-41.013-12.882-61.077-33.583s-50.305-60.918-49.537-89.268l67.133 60.557h102.098l85.315-60.557z'
      ></path>
      <ellipse
        cx='146.853'
        cy='206.794'
        fill='#F14080'
        fillOpacity='0.9'
        rx='29.371'
        ry='31.792'
      ></ellipse>
      <ellipse
        cx='267.133'
        cy='208.308'
        fill='#6C7BFF'
        fillOpacity='0.9'
        rx='16.783'
        ry='18.167'
      ></ellipse>
    </svg>
  );
}

export default React.memo(Logo);