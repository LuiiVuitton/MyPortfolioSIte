// NewComponent.tsx
import React from "react";
interface HomeProps {
  imageSrcPath: string;
}

function Home({ imageSrcPath }: HomeProps) {
  return (
    <div>
      <div className="text-center">
        <img
          src={imageSrcPath}
          width="200"
          height="200"
          className="d-inline-block align-center"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
