import * as React from 'react';

interface Props {
  color: string;
}

const IconArrow: React.FC<Props> = ({ color }) => {
  return (
    <svg
      className="IconArrow"
      fill="none"
      height="18"
      viewBox="0 0 10 18"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M9.6363 16.4636C9.98777 16.8151 9.98777 17.3849 9.6363 17.7364C9.28483 18.0879 8.71498 18.0879 8.36351 17.7364L0.263506 9.6364C-0.087966 9.28492 -0.087966 8.71508 0.263506 8.3636L8.36351 0.263604C8.71498 -0.087868 9.28483 -0.087868 9.6363 0.263604C9.98777 0.615076 9.98777 1.18492 9.6363 1.5364L2.1727 9L9.6363 16.4636Z"
        fill={color || '#777'}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconArrow;
